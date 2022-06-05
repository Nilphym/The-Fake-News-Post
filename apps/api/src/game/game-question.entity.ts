import { NewsEntry } from 'src/news';
import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { GameAnswer } from './game-answer.entity';
import { Game } from './game.entity';

@Entity('game_questions')
export class GameQuestion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Game, (g) => g.questions, { onDelete: 'CASCADE' })
    game: Game;

    @OneToOne(() => NewsEntry, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    question: NewsEntry;

    @OneToMany(() => GameAnswer, (a) => a.question, {
        eager: true,
        cascade: true,
    })
    answers: GameAnswer[];

    @Column('timestamptz', { nullable: true })
    timestamp: Date | null;
}
