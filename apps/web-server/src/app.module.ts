import { Module } from "@nestjs/common"

import { AuthZModule } from "./AuthZModule"
import { DatabaseModule } from "./database.module"
import { UserModule } from "./UserModule/user.module"
import { StatsModule } from "./StatsModule"

@Module({
  imports: [DatabaseModule, AuthZModule, UserModule, StatsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
