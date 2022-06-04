import { Module } from '@nestjs/common';

import { NewsModule } from '../news';
import { RankModule } from '../rank';
import { GameController, GameService } from '.';

@Module({
    imports: [NewsModule, RankModule],
    providers: [GameService],
    controllers: [GameController],
    exports: [GameService],
})
export class GameModule {}
