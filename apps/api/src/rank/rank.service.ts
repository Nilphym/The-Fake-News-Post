import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewsEntry } from '../news';
import { UserScore, UpdateUserScoreDto } from '.';

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

    createUserScore(answers: NewsEntry[]) {
        const entry = this.userScoreRepo.create();

        entry.is_public = false;
        entry.your_answers = answers;
        entry.score = answers.reduce(
            (prev, answer) => prev + answer.your_score,
            0,
        );

        return this.userScoreRepo.save(entry);
    }

    async updateUserScore(id: string, dto: UpdateUserScoreDto) {
        const entry = await this.userScoreRepo.findOne({ where: { id } });

        if (!entry) throw new NotFoundException();

        return this.userScoreRepo.save({
            ...entry,
            ...dto,
        });
    }
}
