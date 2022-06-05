import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { NewsType } from '../news';
import { User } from '../user/user.entity';
import { GameQuestion } from './game-question.entity';

@Entity('game_answers')
export class GameAnswer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn()
    user: User | null;

    @Column({ nullable: true })
    username: string | null;

    @ManyToOne(() => GameQuestion, (q) => q.answers, { onDelete: 'CASCADE' })
    question: GameQuestion;

    @Column('enum', { enum: NewsType })
    answer: NewsType;

    @Column('timestamptz')
    timestamp: Date;
}
