import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
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

    @ManyToMany(() => CrmVersions, (crm) => crm.documents, {nullable: true})
    @JoinTable({name: "DocumentVersionsConnection"})
    crmVersion: Crm;
  }
  