import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { compareSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @ApiProperty({ example: '850d5f65-4ad0-4ac9-a371-1e3006a6253e' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'maciej.opalinski' })
    @Column({ unique: true })
    username: string;

    @Exclude()
    @Column()
    password_hash: string;

    verifyPassword(password: string) {
        return compareSync(password, this.password_hash);
    }
}
