import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_scores')
export class UserScore {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ nullable: true, default: null, example: 'Maciej' })
    @Column({ nullable: true, default: null })
    username: string | null;

    @ApiProperty({ example: 860 })
    @Column('float')
    score: number;

    @ApiProperty({ example: 120, description: '[s]' })
    @Column('int')
    total_time: number;

    @Column('boolean')
    is_public: boolean;
}
