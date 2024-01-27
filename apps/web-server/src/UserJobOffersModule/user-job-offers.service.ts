import { ForbiddenException, Inject, Injectable, NotFoundException } from "@nestjs/common"
import { JobOffer } from "@prisma/client"

import { PrismaService } from "../PrismaModule"
import { UserService } from "../UserModule"
import { CreateJobOfferDto, UpdateJobOfferDto } from "@kudyniuk/validators"

@Injectable()
export class UserJobOffersService {
  constructor(
    @Inject(PrismaService)
    private prismaService: PrismaService,
    @Inject(UserService)
    private userService: UserService,
  ) { }

  async findAll(userId: string): Promise<JobOffer[]> {
    const user = await this.userService.findUnique(userId)
    const companyId = user?.company.id

    return this.prismaService.jobOffer.findMany({
      where: { companyId },
    })
  }

  async create(userId: string, createJobOfferDto: CreateJobOfferDto): Promise<JobOffer> {
    const user = await this.userService.findUnique(userId)
    const companyId = user?.company.id

    if (!companyId) {
      throw new NotFoundException("Please create Company first", "Company - Not Found")
    }

    return this.prismaService.jobOffer.create({ data: { ...createJobOfferDto, companyId } })
  }

  async update(jobOfferId: number, userId: string, updateJobOfferDto: UpdateJobOfferDto): Promise<JobOffer> {
    const jobOffer = await this.prismaService.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: {
        company: {
          include: {
            users: true,
          },
        },
      },
    })

    if (!jobOffer) {
      throw new NotFoundException()
    }

    if (!jobOffer.company.users.map((user) => user.id).includes(userId)) {
      throw new ForbiddenException()
    }

    return this.prismaService.jobOffer.update({ where: { id: jobOfferId }, data: updateJobOfferDto })
  }
}
