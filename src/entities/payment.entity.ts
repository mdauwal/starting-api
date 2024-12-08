import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @Column()
  paymentMethod: string; // e.g., "Card", "Mobile Money"

  @Column()
  paymentStatus: string; // e.g., "Paid", "Pending"

  @Column()
  transactionId: string;
}
