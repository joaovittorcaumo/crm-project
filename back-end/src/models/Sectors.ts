import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { User } from './User';

  
  @Entity('sectors')
  export class Sectors {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar', length: 256, unique: true})
    name: string;
  
    @Column({type: 'varchar'})
    description: string;
  
    @Column({type: 'varchar'})
    users: User[];
  
  }
  