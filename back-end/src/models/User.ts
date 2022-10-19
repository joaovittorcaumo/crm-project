import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import {UserRole} from './enums/userRole';

  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar', length: 256})
    name: string;
  
    @Column({type: 'varchar', length: 256, unique: true})
    email: string;
  
    @Column({select: false})
    password: string;
  
    @Column({type: 'varchar', length: 256, unique: true})
    role: string;

    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.USER,
    })
    permissions: UserRole;
  
  }
  