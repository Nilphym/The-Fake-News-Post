import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/';
import { DatabaseModule } from '../database/';
import { AppService, AppController } from '.';

@Module({
    imports: [ConfigModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
