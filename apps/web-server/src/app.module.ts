import { Module } from "@nestjs/common"

import { AuthZModule } from "./AuthZModule"
import { CompaniesModule } from "./CompanyModule"
import { JobOffersModule } from "./JobOffersModule"
import { StatsModule } from "./StatsModule"
import { UserCompanyModule } from "./UserComapnyModule"
import { UserJobOffersModule } from "./UserJobOffersModule"

@Module({
  imports: [AuthZModule, UserCompanyModule, UserJobOffersModule, JobOffersModule, CompaniesModule, StatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
