import { Module } from "@nestjs/common"

import { CompaniesModule } from "../CompanyModule"
import { JobOffersModule } from "../JobOffersModule"
import { StatsController } from "./stats.controller"
import { StatsService } from "./stats.service"

@Module({
  imports: [JobOffersModule, CompaniesModule],
  providers: [StatsService],
  controllers: [StatsController],
  exports: [],
})
export class StatsModule {}
