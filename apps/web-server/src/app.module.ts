import { Module } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"

import { AuthZModule } from "./AuthZModule"
import { CompaniesModule } from "./CompanyModule"
import { JobOffersModule } from "./JobOffersModule"
import { StatsModule } from "./StatsModule"
import { UserCompanyModule } from "./UserComapnyModule"
import { UserJobOffersModule } from "./UserJobOffersModule"

const SwaggerStaticModule = ServeStaticModule.forRoot({
  rootPath: join(__dirname, "..", "swagger-static"),
  serveRoot: "/",
})
@Module({
  imports: [AuthZModule, UserCompanyModule, UserJobOffersModule, JobOffersModule, CompaniesModule, StatsModule, SwaggerStaticModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
