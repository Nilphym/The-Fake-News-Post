import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { NewsEntry } from '../news';

@Entity('user_scores')
export class UserScore {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, default: null })
    username: string | null;

    @Column('float')
    score: number;

    @Column('boolean')
    is_public: boolean;

    your_answers?: NewsEntry[];
}
