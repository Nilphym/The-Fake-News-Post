import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum NewsType {
    REAL = 'REAL',
    FAKE = 'FAKE',
}

@Entity('news')
export class NewsEntry {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('text')
    title: string;

    @ApiProperty()
    @Column('text')
    content: string;

    @Column('enum', { enum: NewsType })
    real_answer: NewsType;

    @Column('enum', { enum: NewsType })
    ai_answer: NewsType;
}
