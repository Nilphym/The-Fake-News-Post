import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { NewsEntry } from '../news';
import { Game, GameQuestion, GameAnswer } from '../game';
import { User } from '../user';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                ...configService.databaseCredentials(),
                // logging: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                synchronize: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                entities: [NewsEntry, Game, GameQuestion, GameAnswer, User],
            }),
        }),
    ],
})
export class DatabaseModule {}
