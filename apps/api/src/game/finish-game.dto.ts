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

export const GAME_QUESTIONS_AMOUNT = 15;
export const GAME_QUESTION_TIME_LIMIT = 5 * 60;

export class AnswerDto {
    @IsUUID()
    id: string;

    @IsOptional()
    @IsEnum(NewsType)
    answer: NewsType;

    @IsInt()
    @Min(0)
    @Max(GAME_QUESTION_TIME_LIMIT)
    time: number;
}

export class FinishGameDto {
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    @ArrayMinSize(GAME_QUESTIONS_AMOUNT)
    @ArrayMaxSize(GAME_QUESTIONS_AMOUNT)
    answers: AnswerDto[];
}
