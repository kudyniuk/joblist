import { Module } from "@nestjs/common"

import { CompaniesController } from "./companies.controller"
import { CompaniesService } from "./companies.service"
import { PrismaModule } from "../PrismaModule"

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule { }
