import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RankController, RankService, UserScore } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([UserScore])],
    controllers: [RankController],
    providers: [RankService],
    exports: [RankService],
})
export class RankModule {}
