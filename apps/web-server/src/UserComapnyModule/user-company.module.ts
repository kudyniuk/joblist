import { Module } from "@nestjs/common"

import { PrismaModule } from "../PrismaModule"
import { UserModule } from "../UserModule"
import { UserCompanyController } from "./user-company.controller"
import { UserCompanyService } from "./user-company.service"

@Module({
  imports: [PrismaModule, UserModule],
  providers: [UserCompanyService],
  controllers: [UserCompanyController],
  exports: [UserCompanyService],
})
export class UserCompanyModule {}
