import { Injectable } from '@nestjs/common';

import { NewsService } from '../news';
import { RankService } from '../rank';
import { GAME_QUESTIONS_AMOUNT, FinishGameDto } from '.';
import { CorrectAnswer } from 'src/news/correct-answer.class';

@Injectable()
export class GameService {
    constructor(
        private newsService: NewsService,
        private rankService: RankService,
    ) {}

    async createGame() {
        const news = await this.newsService.getRandomNews(
            GAME_QUESTIONS_AMOUNT,
        );

        return news.map((v) => {
            v.real_answer = undefined;
            v.ai_answer = undefined;
            return v;
        });
    }

    async finishGame(dto: FinishGameDto) {
        const answers: CorrectAnswer[] = [];

        for (const { id, answer, time } of dto.answers) {
            answers.push(
                await this.newsService.checkIfCorrect(id, time, answer),
            );
        }

        return this.rankService.createUserScore(answers);
    }
}
