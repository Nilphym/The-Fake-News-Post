import { ApiProperty } from '@nestjs/swagger';

import { NewsEntry, NewsType } from './news-entry.entity';

export class CorrectAnswer extends NewsEntry {
    @ApiProperty({ enum: NewsType, nullable: true })
    your_answer: NewsType | null;

    @ApiProperty({ enum: NewsType })
    real_answer: NewsType;

    @ApiProperty({ enum: NewsType })
    ai_answer: NewsType;

    @ApiProperty({ example: 20, description: '[s]' })
    time: number;

    @ApiProperty({ example: 20 })
    score: number;
}
