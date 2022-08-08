import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('C_USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;
}
