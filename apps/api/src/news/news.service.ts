import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewsEntry } from '.';
import { NewsType } from './news-entry.entity';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntry) private newsRepo: Repository<NewsEntry>,
    ) {}

    getAll() {
        return this.newsRepo.find();
    }

    getRandomNews(amount) {
        return this.newsRepo
            .createQueryBuilder('news')
            .select()
            .orderBy('RANDOM()')
            .limit(amount)
            .getMany();
    }

    async checkIfCorrect(id: string, time: number, answer?: NewsType) {
        const entry = await this.newsRepo.findOne({ where: { id } });

        if (!entry) throw new NotFoundException();

        const ok = entry.real_answer === answer;
        let score = 0;
        if (!ok && time < 5) score = 100; // user strzelił źle bardzo szybko
        if (!ok && time > 20) score = 10; // user strzelił źle, ale robił research
        if (!ok && time > 30) score = 20; // user strzelił źle, ale robił duży research
        if (ok && time < 10) score = 10; // user strzelił dobrze bardzo szybko
        if (ok && time > 10 && time < 20) score = 50; // user ocenił poprawnie robiąc research
        if (ok && time > 20) score = 100; // user ocenił poprawnie robiąc duży research
        if (ok && time > 30) score = 100; // user ocenił poprawnie robiąc duży research

        entry.your_score = score;
        entry.your_answer = answer;

        return entry;
    }
}
