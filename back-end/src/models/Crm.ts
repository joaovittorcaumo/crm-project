import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import {status} from './enums/status';

  
  @Entity('crm')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar', length: 256})
    name: string;

    @Column({type: 'varchar'})
    complexity: string;
  
    @Column({type: 'varchar'})
    goal: string;
  
    @Column({type: 'varchar'})
    justification: string;
  
    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'varchar'})
    documents: Document[];

    @CreateDateColumn({type: 'date'})
    createdAt: Date;  

    @Column({
      type: 'enum',
      enum: status,
      default: status.ANALISE,
    })
    type: status;
  
  }
  