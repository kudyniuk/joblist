import { Module } from "@nestjs/common"
import { UserModule } from "src/UserModule"

import { PrismaModule } from "../PrismaModule"
import { UserJobOffersController } from "./user-job-offers.controller"
import { UserJobOffersService } from "./user-job-offers.service"

@Module({
  imports: [PrismaModule, UserModule],
  providers: [UserJobOffersService],
  controllers: [UserJobOffersController],
  exports: [UserJobOffersService],
})
export class UserJobOffersModule {}
