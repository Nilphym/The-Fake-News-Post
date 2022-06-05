import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewsEntry } from '.';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntry) private newsRepo: Repository<NewsEntry>,
    ) {}

    getRandomNews(amount: number) {
        return this.newsRepo
            .createQueryBuilder('news')
            .select()
            .orderBy('RANDOM()')
            .limit(amount)
            .getMany();
    }
}
