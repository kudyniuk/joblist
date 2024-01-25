import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Company } from "../CompanyModule"
import { CreateJobOfferDto } from "./create-job-offer.dto"
import { JobOffer } from "./job-offer.entity"
import { UpdateJobOfferDto } from "./update-job-offer.dto"

@Injectable()
export class JobOffersService {
  constructor(
    @InjectRepository(JobOffer)
    private jobOffersRepository: Repository<JobOffer>,
  ) {}

  findAll(): Promise<JobOffer[]> {
    return this.jobOffersRepository.find({
      relations: ["company"],
    })
  }

  findOne(id: number): Promise<JobOffer> {
    return this.jobOffersRepository.findOne({ where: { id }, relations: ["company", "company.users"] })
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

  async save(createJobOfferDto: CreateJobOfferDto | UpdateJobOfferDto, company: Company): Promise<JobOffer> {
    return this.jobOffersRepository.save({ ...createJobOfferDto, company })
  }

  async removeOne(id: number): Promise<JobOffer> {
    const jobOffer = await this.findOne(id)
    const deletedJobOffers = await this.jobOffersRepository.remove([jobOffer])

    return deletedJobOffers[0]
  }
}
