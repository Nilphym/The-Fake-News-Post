import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsService, NewsEntry } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([NewsEntry])],
    providers: [NewsService],
    exports: [NewsService],
})
export class NewsModule {}
