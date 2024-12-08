import { Module } from '@nestjs/common';
import { LogisticsService } from './logistics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logistics } from 'src/entities/logistics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Logistics])],
  providers: [LogisticsService],
  controllers: [LogisticsService],
})
export class LogisticsModule {}
