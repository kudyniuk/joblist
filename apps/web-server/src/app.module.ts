import { Module } from "@nestjs/common"

import { AuthZModule } from "./AuthZModule"
import { DatabaseModule } from "./database.module"
import { UserModule } from "./UserModule/user.module"

@Module({
  imports: [DatabaseModule, AuthZModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
