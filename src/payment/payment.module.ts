import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentService],
  controllers: [PaymentService],
})
export class PaymentModule {}
