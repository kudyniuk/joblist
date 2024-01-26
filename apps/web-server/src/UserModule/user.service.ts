import { Inject, Injectable } from "@nestjs/common"

import { PrismaService } from "../PrismaModule"
@Injectable()
export class UserService {
  constructor(
    @Inject(PrismaService)
    private prismaService: PrismaService
  ) { }

  findUnique(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        company: true
      }
    })
  }

  create(sub: string, companyId: number) {
    return this.prismaService.user.create({
      data: {
        id: sub,
        companyId: companyId
      }
    })
  }
}
