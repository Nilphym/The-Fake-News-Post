import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntry {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
