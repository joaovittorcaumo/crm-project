import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Crm } from './Crm';
import { Documents } from './Documents';
import { status } from './enums/status';
import { Sectors } from './Sectors';

  
  @Entity('crmVersion')
  export class CrmVersions {
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

    @OneToMany(() => Documents, (documents) => documents.mainCrm, {nullable: true})
    documents: Documents[];

    @CreateDateColumn({type: 'varchar'})
    createdAt: string;  

    @ManyToOne(() => Crm, (crm) => crm.versions)
    mainCrm: Crm;

    @Column({
      type: 'enum',
      enum: status,
      default: status.ANALISE,
    })
    type: status;

    @ManyToMany(() => Sectors)
    @JoinTable()
    sectors: Sectors[];
    
  }
  