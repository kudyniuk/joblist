import { Module } from "@nestjs/common"

import { PrismaModule } from "../PrismaModule"
import { CompaniesController } from "./companies.controller"
import { CompaniesService } from "./companies.service"

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
