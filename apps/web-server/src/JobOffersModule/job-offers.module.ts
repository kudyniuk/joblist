import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffer } from './job-offer.entity';
import { JobOffersService } from './job-offers.service';
import { JobOffersController } from './job-offers.controller';
import { CompaniesModule } from 'src/CompanyModule';

@Module({
  imports: [TypeOrmModule.forFeature([JobOffer]), CompaniesModule],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService]
})
export class JobOffersModule {}
