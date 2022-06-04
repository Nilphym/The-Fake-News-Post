import { Injectable } from '@nestjs/common';

import { NewsEntry, NewsService } from '../news';
import { RankService } from '../rank';
import { GAME_QUESTIONS_AMOUNT, FinishGameDto } from '.';

@Injectable()
export class GameService {
    constructor(
        private newsService: NewsService,
        private rankService: RankService,
    ) {}

    async createGame() {
        return {
            news: await this.newsService.getRandomNews(GAME_QUESTIONS_AMOUNT),
        };
    }

    async finishGame(dto: FinishGameDto) {
        const answers: NewsEntry[] = [];

        for (const { id, answer, time } of dto.answers) {
            answers.push(
                await this.newsService.checkIfCorrect(id, time, answer),
            );
        }

        return this.rankService.createUserScore(answers);
    }
}
