import { Module } from "@nestjs/common"

import { UserService } from "./user.service"
import { PrismaModule } from "../PrismaModule"

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [],
  exports: [UserService],
})
export class UserModule { }
