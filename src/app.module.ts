import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticsController } from './logistics/logistics.controller';
import { LogisticsModule } from './logistics/logistics.module';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { RatingService } from './rating/rating.service';
import { RatingModule } from './rating/rating.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '3001', // Change to your database host
      port: 5432, // Default PostgreSQL port
      username: 'your_username', // Replace with your database username
      password: 'your_password', // Replace with your database password
      database: 'afrifarma', // Replace with your database name
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Set to false in production to avoid data loss
    }),
    
    UsersModule, ProductsModule, LogisticsModule, OrderModule, PaymentModule, RatingModule],
  controllers: [AppController, LogisticsController, PaymentController, ProductsController],
  providers: [AppService, OrderService, RatingService, ProductsService],
})
export class AppModule {}
