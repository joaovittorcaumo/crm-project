import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity('document')
  export class Documents {
    @PrimaryGeneratedColumn()
    link: string;
  
    @Column({type: 'varchar', length: 256})
    name: string;

    @Column({type: 'varchar'})
    description: string;
  
  }
  