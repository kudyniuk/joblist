import { Module } from "@nestjs/common"

import { UserCompanyController } from "./user-company.controller"
import { UserCompanyService } from "./user-company.service"
import { PrismaModule } from "../PrismaModule"
import { UserModule } from "../UserModule"

@Module({
  imports: [PrismaModule, UserModule],
  providers: [UserCompanyService],
  controllers: [UserCompanyController],
  exports: [UserCompanyService],
})
export class UserCompanyModule { }
