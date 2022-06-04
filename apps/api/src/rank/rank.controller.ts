import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { RankService, UpdateUserScoreDto } from '.';
import { UserScore } from './user-score.entity';

@Controller('rank')
export class RankController {
    constructor(private rankService: RankService) {}

    @Get()
    @ApiResponse({ isArray: true, type: UserScore })
    getRank() {
        return this.rankService.getRank(15);
    }

    @Put('score/:id')
    @ApiResponse({ type: UserScore })
    updateUserScore(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() dto: UpdateUserScoreDto,
    ) {
        return this.rankService.updateUserScore(id, dto);
    }
}
