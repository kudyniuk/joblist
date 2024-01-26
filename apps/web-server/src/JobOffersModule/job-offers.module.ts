import { Module } from "@nestjs/common"

import { JobOffersController } from "./job-offers.controller"
import { JobOffersService } from "./job-offers.service"
import { PrismaModule } from "../PrismaModule"

@Module({
  imports: [PrismaModule],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService],
})
export class JobOffersModule { }
