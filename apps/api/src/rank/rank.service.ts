import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserScore, UpdateUserScoreDto } from '.';
import { CorrectAnswer } from 'src/news/correct-answer.class';
import { UserScoreResponse } from './user-score-response.class';

@Injectable()
export class RankService {
    constructor(
        @InjectRepository(UserScore)
        private userScoreRepo: Repository<UserScore>,
    ) {}

    async getRank(size?: number) {
        const rank = await this.userScoreRepo.find({
            order: {
                score: 'DESC',
            },
            where: {
                is_public: true,
            },
            take: size,
        });

        return rank.map((v) => {
            v.id = undefined;
            v.is_public = undefined;
            return v;
        });
    }

    async createUserScore(answers: CorrectAnswer[]) {
        const entry = this.userScoreRepo.create();

        entry.is_public = false;
        entry.score = answers.reduce((prev, { score }) => prev + score, 0);
        entry.total_time = answers.reduce((prev, { time }) => prev + time, 0);

        await this.userScoreRepo.save(entry);

        const user_score: UserScoreResponse = {
            ...entry,
            your_answers: answers,
        };

        return user_score;
    }

    async updateUserScore(id: string, dto: UpdateUserScoreDto) {
        const entry = await this.userScoreRepo.findOne({ where: { id } });

        if (!entry) throw new NotFoundException();

        await this.userScoreRepo.save({
            ...entry,
            username: dto.username,
            is_public: true,
        });

        return entry;
    }
}
