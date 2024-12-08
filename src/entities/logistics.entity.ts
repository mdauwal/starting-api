import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Logistics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  partnerName: string;

  @Column()
  serviceArea: string;

  @OneToMany(() => Order, (order) => order.id)
  orders: Order[];

  @Column()
  rating: number;
}
