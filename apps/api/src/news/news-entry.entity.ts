import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum NewsType {
    REAL = 'REAL',
    FAKE = 'FAKE',
}

@Entity('news')
export class NewsEntry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    body: string;

    @Column('enum', { enum: NewsType })
    real_answer: NewsType;

    @Column('enum', { enum: NewsType })
    ai_answer: NewsType;

    your_answer?: NewsType | null;

    your_score?: number;
}
