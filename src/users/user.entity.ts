import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users') // Maps this class to the 'users' table
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false }) // Exclude from select queries by default
  password: string;

  @Column()
  role: string; // 'farmer', 'consumer', or 'logistics_partner'

  @Column({ nullable: true })
  location: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
