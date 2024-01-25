import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { CompaniesModule } from "../CompanyModule"
import { JobOffer } from "./job-offer.entity"
import { JobOffersController } from "./job-offers.controller"
import { JobOffersService } from "./job-offers.service"

@Module({
  imports: [TypeOrmModule.forFeature([JobOffer])],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService],
})
export class JobOffersModule { }
