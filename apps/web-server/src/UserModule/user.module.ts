import { Module } from "@nestjs/common"

import { PrismaModule } from "../PrismaModule"
import { UserService } from "./user.service"

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [],
  exports: [UserService],
})
export class UserModule {}
