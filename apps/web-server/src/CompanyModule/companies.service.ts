import { Inject, Injectable } from "@nestjs/common"

import { PrismaService } from "../PrismaModule"
import { Company } from "@prisma/client"

@Injectable()
export class CompaniesService {
  constructor(
    @Inject(PrismaService)
    private prismaService: PrismaService,
  ) { }

  findOne(id: number): Promise<Company | null> {
    return this.prismaService.company.findUnique({ where: { id } })
  }

  findAll(): Promise<Company[]> {
    return this.prismaService.company.findMany()
  }
}
