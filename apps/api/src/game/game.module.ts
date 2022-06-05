import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsModule } from '../news';
import { User } from '../user';
import { GameService, Game, GameQuestion, GameAnswer } from '.';
import { GameGateway } from './game.gateway';

@Module({
    imports: [
        NewsModule,
        TypeOrmModule.forFeature([User, Game, GameQuestion, GameAnswer]),
    ],
    providers: [GameService, GameGateway],
    exports: [GameService],
})
export class GameModule {}
