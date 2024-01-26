import { Module } from "@nestjs/common"

import { AuthZModule } from "./AuthZModule"
import { StatsModule } from "./StatsModule"
import { UserCompanyModule } from "./UserComapnyModule"
import { UserJobOffersModule } from "./UserJobOffersModule"
import { JobOffersModule } from "./JobOffersModule"
import { CompaniesModule } from "./CompanyModule"

@Module({
  imports: [AuthZModule, UserCompanyModule, UserJobOffersModule, JobOffersModule, CompaniesModule, StatsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
