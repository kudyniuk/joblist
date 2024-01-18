import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { JobOffersModule } from "../JobOffersModule"
import { UserController } from "./user.controller"
import { User } from "./user.entity"
import { UserService } from "./user.service"

@Module({
  imports: [TypeOrmModule.forFeature([User]), JobOffersModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
