import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Crm } from './Crm';
import { CrmVersions } from './CrmVersions';

  
  @Entity('document')
  export class Documents {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar'})
    link: string;

    @Column({type: 'varchar', length: 256})
    name: string;

    @Column({type: 'varchar'})
    description: string;
    
    @ManyToOne(() => Crm, (crm) => crm.documents, {nullable: true})
    mainCrm: Crm;

    @ManyToOne(() => CrmVersions, (crm) => crm.documents, {nullable: true})
    crmVersion: Crm;
  }
  