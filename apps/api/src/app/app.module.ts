import { Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { DatabaseModule } from '../database';
import { NewsModule } from '../news';
import { RankModule } from '../rank';
import { GameModule } from '../game';
import { AppService, AppController } from '.';

@Module({
    imports: [ConfigModule, DatabaseModule, NewsModule, RankModule, GameModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
