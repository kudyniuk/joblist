import { Module } from "@nestjs/common"

import { JobOffersModule } from "../JobOffersModule"
import { StatsController } from "./stats.controller"
import { StatsService } from "./stats.service"

@Module({
  imports: [JobOffersModule],
  providers: [StatsService],
  controllers: [StatsController],
  exports: [],
})
export class StatsModule {}
