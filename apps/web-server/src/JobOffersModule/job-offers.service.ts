import { Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CompaniesService } from "../CompanyModule"
import { CreateJobOfferDto } from "./create-job-offer.dto"
import { JobOffer } from "./job-offer.entity"

@Injectable()
export class JobOffersService {
  @Inject(CompaniesService)
  private readonly companiesService: CompaniesService

  constructor(
    @InjectRepository(JobOffer)
    private jobOffersRepository: Repository<JobOffer>,
  ) { }

  findAll(): Promise<JobOffer[]> {
    return this.jobOffersRepository.find({
      relationLoadStrategy: "join",
      relations: { company: true },
    })
  }

  findOne(id: number): Promise<JobOffer> {
    return this.jobOffersRepository.findOneBy({ id })
  }

  findAllByCompany(companyId: number): Promise<JobOffer[]> {
    return this.jobOffersRepository.find({
      where: {
        company: {
          id: companyId,
        },
      },
    })
  }

  async create({ companyId, ...createJobOfferDto }: CreateJobOfferDto): Promise<JobOffer> {
    const company = await this.companiesService.findOne(companyId)

    return this.jobOffersRepository.save({ ...createJobOfferDto, company })
  }

  async removeOne(id: number): Promise<JobOffer> {
    const jobOffer = await this.findOne(id)
    const deletedJobOffers = await this.jobOffersRepository.remove([jobOffer])

    return deletedJobOffers[0]
  }
}
