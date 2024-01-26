import { Inject, Injectable } from "@nestjs/common"

import { CreateJobOfferDto, UpdateJobOfferDto } from "../UserJobOffersModule/job-offer.dto"
import { PrismaService } from "../PrismaModule"

@Injectable()
export class JobOffersService {
  constructor(
    @Inject(PrismaService)
    private prismaService: PrismaService,
  ) { }

  findAll() {
    return this.prismaService.jobOffer.findMany({
      include: {
        company: true
      }
    })

  }

  findOne(id: number) {
    return this.prismaService.jobOffer.findUnique({
      where: { id }, include: {
        company: {
          include: {
            users: true
          }
        }
      }
    })
  }

  findAllByCompany(companyId: number) {
    return this.prismaService.jobOffer.findMany({
      where: {
        company: {
          id: companyId,
        },
      },
    })
  }
}
