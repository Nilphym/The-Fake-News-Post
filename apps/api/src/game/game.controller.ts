import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { NewsEntry } from 'src/news';
import { UserScoreResponse } from 'src/rank';

import { GameService, FinishGameDto } from '.';

@Controller('game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post()
    @ApiResponse({ isArray: true, type: NewsEntry })
    startGame() {
        return this.gameService.createGame();
    }

    @Post('finish')
    @ApiResponse({ type: UserScoreResponse })
    finishGame(@Body() dto: FinishGameDto) {
        return this.gameService.finishGame(dto);
    }
}
