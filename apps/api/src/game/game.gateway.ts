import { ParseBoolPipe, ParseEnumPipe } from '@nestjs/common';
import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NewsType } from 'src/news';
import { GameService } from './game.service';

@WebSocketGateway({
    cors: {
        origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
        credentials: true,
    },
})
export class GameGateway {
    constructor(private gameService: GameService) {}

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('game:create')
    async onGameCreate(@ConnectedSocket() socket: Socket) {
        const game = await this.gameService.createGame();

        socket.join(`game:${game.id}`);

        // for (let index = 0; index < 1000; index++) {
        //     console.log(this.gameService.createGamePin());
        // }

        delete game.questions;
        return game;
    }

    @SubscribeMessage('game:join')
    async onGameJoin(
        @MessageBody('pin') pin: string,
        @MessageBody('authenticated', new ParseBoolPipe()) auth: boolean,
        @MessageBody('user') user: string,
        @ConnectedSocket() socket: Socket,
    ) {
        const game = await this.gameService.joinGame(pin);

        socket.join(`game:${game.id}`);
        socket.to(`game:${game.id}`).emit('game:user_joined', { user, auth });

        return game;
    }

    @SubscribeMessage('game:start')
    async onGameStart(@MessageBody() pin: string) {
        const game = await this.gameService.startGame(pin);

        this.server.to(`game:${game.id}`).emit('game:started');
    }

    @SubscribeMessage('game:question_start')
    async onQuestionStart(@MessageBody() pin: string) {
        const question = await this.gameService.newQuestion(pin);

        if (!question) {
            const rank = await this.gameService.getRank(pin);
            this.server.to(`game:${pin}`).emit('game:rank', rank);

            await this.gameService.stopGame(pin);

            this.server.socketsLeave(`game:${pin}`);
            return;
        }

        this.server.to(`game:${pin}`).emit('game:question_start', question);
    }

    @SubscribeMessage('game:answer')
    async onQuestionAnswer(
        @MessageBody('pin') pin: string,
        @MessageBody('answer_type', new ParseEnumPipe(NewsType))
        answer_type: NewsType,
        @MessageBody('authenticated', new ParseBoolPipe()) auth: boolean,
        @MessageBody('user') user: string,
    ) {
        await this.gameService.answerQuestion(pin, answer_type, user, auth);

        this.server.to(`game:${pin}`).emit('game:answer', { user, auth });
    }

    @SubscribeMessage('game:question_stop')
    async onQuestionStop(@MessageBody() pin: string) {
        const { question } = await this.gameService.getCurrentQuestion(pin);

        this.server
            .to(`game:${pin}`)
            .emit('game:correct_answer', question.real_answer);
    }
}
