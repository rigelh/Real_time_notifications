import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'notifications' })
export class notifications {
@PrimaryGeneratedColumn()

id: number;

@Column()
source: string;

@Column()
message: string;

}