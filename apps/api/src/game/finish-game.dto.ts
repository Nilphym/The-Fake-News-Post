import {
    ArrayMaxSize,
    ArrayMinSize,
    IsEnum,
    IsInt,
    IsOptional,
    IsUUID,
    Max,
    Min,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { NewsType } from '../news';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export const GAME_QUESTIONS_AMOUNT =
    process.env.NODE_ENV === 'development' ? 3 : 15;
export const GAME_QUESTION_TIME_LIMIT = 5 * 60;

export class AnswerDto {
    @ApiProperty()
    @IsUUID()
    id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(NewsType)
    answer: NewsType;

    @ApiProperty()
    @IsInt()
    @Min(0)
    @Max(GAME_QUESTION_TIME_LIMIT)
    time: number;
}

export class FinishGameDto {
    @ApiProperty({ isArray: true, type: AnswerDto })
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    @ArrayMinSize(GAME_QUESTIONS_AMOUNT)
    @ArrayMaxSize(GAME_QUESTIONS_AMOUNT)
    answers: AnswerDto[];
}
