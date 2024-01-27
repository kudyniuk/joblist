import { Module } from "@nestjs/common"

import { PrismaModule } from "../PrismaModule"
import { JobOffersController } from "./job-offers.controller"
import { JobOffersService } from "./job-offers.service"

@Module({
  imports: [PrismaModule],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService],
})
export class JobOffersModule {}
