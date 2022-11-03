import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
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

    @ManyToOne(() => Sectors, (sector) => sector.users, {nullable: true})
    sector: Sectors;
}
