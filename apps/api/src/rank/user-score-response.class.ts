import { ApiProperty } from '@nestjs/swagger';
import { CorrectAnswer } from 'src/news/correct-answer.class';
import { UserScore } from './user-score.entity';

export class UserScoreResponse extends UserScore {
    @ApiProperty({ isArray: true, type: CorrectAnswer })
    your_answers: CorrectAnswer[];

    @ApiProperty()
    is_public: boolean;
}
