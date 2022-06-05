// import { User } from '../user';
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from 'typeorm';
import { GameQuestion } from './game-question.entity';

@Entity('games')
export class Game {
    @PrimaryColumn()
    id: string;

    @Column('boolean', { default: false })
    started: boolean;

    // @Column()
    // secret_hash: string;

    // @ManyToMany(() => User)
    // users: User[];

    @Column({ nullable: true })
    current_question_id: string | null;

    @Exclude()
    @OneToMany(() => GameQuestion, (q) => q.game, {
        eager: true,
        cascade: true,
    })
    @JoinTable()
    questions: GameQuestion[];
}
