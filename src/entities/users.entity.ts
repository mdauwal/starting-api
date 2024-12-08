import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';

export enum UserRole {
  FARMER = 'farmer',
  CONSUMER = 'consumer',
  LOGISTICS_PARTNER = 'logistics_partner',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
