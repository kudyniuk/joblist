import { Module } from "@nestjs/common"

import { PrismaModule } from "../PrismaModule"
import { UserJobOffersController } from "./user-job-offers.controller"
import { UserJobOffersService } from "./user-job-offers.service"
import { UserModule } from "src/UserModule"

@Module({
  imports: [PrismaModule, UserModule],
  providers: [UserJobOffersService],
  controllers: [UserJobOffersController],
  exports: [UserJobOffersService],
})
export class UserJobOffersModule { }
