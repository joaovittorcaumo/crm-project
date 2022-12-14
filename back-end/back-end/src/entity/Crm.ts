import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
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
      
    @ManyToOne(() => User, (user) => user.crmsCreator, {nullable: true})
    creator: User;

    
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

    @OneToMany(() => Documents, (documents) => documents.mainCrm, {nullable: true})
    documents: Documents[];

    @CreateDateColumn()
    createdAt: Date;  

    @OneToMany(() => CrmVersions, (version) => version.mainCrm, {nullable: true})
    versions: CrmVersions[];
  
    @ManyToMany(() => User)
    @JoinTable({name: "CrmUserConnection"})
    users: User[];

    @ManyToMany(() => Sectors)
    @JoinTable({name: "CrmSectorsConnection"}) // adicionar nomes
    sectors: Sectors[];
  }
  