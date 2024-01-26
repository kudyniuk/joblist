import { Inject, Injectable } from "@nestjs/common"

import { CreateCompanyDto } from "./create-company.dto"
import { PrismaService } from "../PrismaModule"
import { UserService } from "src/UserModule"

@Injectable()
export class UserCompanyService {
  constructor(
    @Inject(PrismaService)
    private prismaService: PrismaService,
    @Inject(UserService)
    private userService: UserService
  ) { }


  async findUnique(userId: string) {
    const user = await this.userService.findUnique(userId)
    return user?.company
  }

  async createOrUpdate(userId: string, createCompanyDto: CreateCompanyDto) {
    const user = await this.userService.findUnique(userId)

    if (!user) {
      const company = await this.prismaService.company.create({ data: createCompanyDto })

      await this.userService.create(userId, company.id)

      return company
    }

    return await this.prismaService.company.update({
      where: { id: user.companyId },
      data: {
        ...user.company,
        ...createCompanyDto,
      }
    })
  }

}
