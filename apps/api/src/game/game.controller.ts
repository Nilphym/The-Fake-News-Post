import { Body, Controller, Post } from '@nestjs/common';

import { GameService, FinishGameDto } from '.';

@Controller('game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post()
    startGame() {
        return this.gameService.createGame();
    }

    @Post('finish')
    finishGame(@Body() dto: FinishGameDto) {
        return this.gameService.finishGame(dto);
    }
}
