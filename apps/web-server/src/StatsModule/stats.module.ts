import { Module } from "@nestjs/common"

import { JobOffersModule } from "../JobOffersModule"
import { StatsController } from "./stats.controller"
import { StatsService } from "./stats.service"
import { CompaniesModule } from "../CompanyModule"

@Module({
  imports: [JobOffersModule, CompaniesModule],
  providers: [StatsService],
  controllers: [StatsController],
  exports: [],
})
export class StatsModule { }
