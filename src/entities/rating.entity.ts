import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Product } from './products.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  rating: number; // Scale of 1 to 5

  @Column()
  review: string;
}
