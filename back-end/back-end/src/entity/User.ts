import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Crm } from "./Crm"
import { Sectors } from "./Sectors"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    role: string

    @Column()
    password: string

    @ManyToOne(() => Sectors, (sector) => sector.users, {nullable: true})
    sector: Sectors;
        
    @OneToMany(() => Crm, (crms) => crms.creator, {nullable: true})
    crmsCreator: Crm[];

}
