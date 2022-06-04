import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Put,
} from '@nestjs/common';

import { RankService, UpdateUserScoreDto } from '.';

@Controller('rank')
export class RankController {
    constructor(private rankService: RankService) {}

    @Get()
    getRank() {
        return this.rankService.getRank(15);
    }

    @Put('score/:id')
    updateUserScore(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() dto: UpdateUserScoreDto,
    ) {
        return this.rankService.updateUserScore(id, dto);
    }
}
