import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Product } from './products.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  quantity: number;

  @Column()
  status: string; // e.g., "Pending", "Delivered"

  @Column()
  totalPrice: number;
}
