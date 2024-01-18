import { Module } from "@nestjs/common"

import { AuthZModule } from "./AuthZModule"
import { DatabaseModule } from "./database.module"
import { StatsModule } from "./StatsModule"
import { UserModule } from "./UserModule/user.module"

@Module({
  imports: [DatabaseModule, AuthZModule, UserModule, StatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
