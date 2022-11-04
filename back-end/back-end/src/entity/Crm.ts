import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { CrmVersions } from './CrmVersions';
import { Documents } from './Documents';
import { status } from './enums/status';
import { Sectors } from './Sectors';
import { User } from './User';

  
  @Entity('crm')
  export class Crm {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar', length: 256})
    name: string;

    @Column({type: 'varchar'})
    complexity: string;
  
    @Column({type: 'varchar'})
    goal: string;

    
    @Column({
      type: 'enum',
      enum: status,
      default: status.ANALISE,
    })
    type: status;
  
    @Column({type: 'varchar'})
    justification: string;
  
    @Column({type: 'varchar'})
    description: string;

    @Column()
    creator: User;

    @OneToMany(() => Documents, (documents) => documents.mainCrm, {nullable: true})
    documents: Documents[];

    @CreateDateColumn({type: 'varchar'})
    createdAt: string;  

    @OneToMany(() => CrmVersions, (version) => version.mainCrm, {nullable: true})
    versions: CrmVersions[];

  
    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToMany(() => Sectors)
    @JoinTable() // adicionar nomes
    sectors: Sectors[];
      crm: Promise<User[]>;
  }
  