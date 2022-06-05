import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WsException } from '@nestjs/websockets';
import { User } from 'src/user';
import { Repository } from 'typeorm';

import { NewsService, NewsType } from '../news';
import { GameAnswer } from './game-answer.entity';
import { GameQuestion } from './game-question.entity';
import { Game } from './game.entity';

@Injectable()
export class GameService {
    constructor(
        private newsService: NewsService,
        @InjectRepository(User) private users: Repository<User>,
        @InjectRepository(Game) private games: Repository<Game>,
    ) {}

    async createGame() {
        const questions = await this.newsService.getRandomNews(1);

        const game = this.games.create();

        game.id = this.createGamePin();
        game.questions = questions.map((question) => {
            const gq = new GameQuestion();
            gq.question = question;
            return gq;
        });

        console.log(`Trying to save game with id ${game.id}`);

        return this.games.save(game);
    }

    async joinGame(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin, started: false },
        });

        if (!game) throw new WsException('not found');

        delete game.questions;
        return game;
    }

    async startGame(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin, started: false },
        });

        if (!game) throw new WsException('not found');

        game.started = true;

        return this.games.save(game);
    }

    async newQuestion(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin, started: true },
        });

        if (!game) throw new WsException('not found');

        const question = game.questions.find((q) => !q.timestamp);

        if (!question) return null;

        question.timestamp = new Date();

        game.current_question_id = question.id;

        await this.games.save(game);

        return question;
    }

    async answerQuestion(
        pin: string,
        answer_type: NewsType,
        user: string,
        authenticated: boolean,
    ) {
        const game = await this.games.findOne({
            where: { id: pin, started: true },
        });

        if (!game) throw new WsException('not found');

        const question = game.questions.find(
            (q) => q.id === game.current_question_id,
        );

        if (!question) throw new WsException('not found');

        let user_obj: User | undefined;
        if (authenticated) {
            user_obj = await this.users.findOne({ where: { id: user } });

            if (!user_obj) throw new WsException('unauthorized');
        }

        const answer = new GameAnswer();
        answer.answer = answer_type;
        answer.timestamp = new Date();
        answer.user = user_obj;
        answer.username = authenticated ? null : user;

        question.answers.push(answer);

        await this.games.save(game);

        return answer;
    }

    async getCurrentQuestion(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin, started: true },
        });

        if (!game) throw new WsException('not found');

        return game.questions.find((q) => q.id === game.current_question_id);
    }

    async getRank(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin, started: true },
        });

        if (!game) throw new WsException('not found');

        const rank: { [key: string]: number } = {};

        const { questions } = game;

        questions.forEach((q) => {
            q.answers.forEach((a) => {
                const user = a.username || a.user.username;
                const stop = a.timestamp.getTime();
                const start = q.timestamp.getTime();
                const delta_s = (stop - start) / 1000;

                if (!rank[user]) rank[user] = 0;

                if (a.answer !== q.question.real_answer) return;

                rank[user] += Math.min(1000, 1200 / delta_s);
            });
        });

        const sorted = Object.entries(rank)
            .sort((a, b) => b[1] - a[1])
            .map((v) => ({ name: v[0], score: Math.floor(v[1]) }));

        return sorted;
    }

    async stopGame(pin: string) {
        const game = await this.games.findOne({
            where: { id: pin },
        });

        if (!game) throw new WsException('not found');

        await this.games.remove(game);
    }

    createGamePin(length = 6) {
        const x = Math.pow(10, length);
        return (Math.floor(Math.random() * x) + x).toString().substring(1);
    }
}
