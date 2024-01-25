import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateJobOfferDto } from "src/JobOffersModule/create-job-offer.dto"
import { Repository } from "typeorm"

import { CompaniesService, Company, CreateCompanyDto } from "../CompanyModule"
import { JobOffer, UpdateJobOfferDto } from "../JobOffersModule"
import { JobOffersService } from "../JobOffersModule/job-offers.service"
import { User } from "./user.entity"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(CompaniesService)
    private companiesService: CompaniesService,
    @Inject(JobOffersService)
    private jobOffersService: JobOffersService,
  ) {}

  findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { id: id },
      relations: {
        company: true,
      },
    })
  }

  create(sub: string): Promise<User> {
    return this.usersRepository.save({
      id: sub,
    })
  }

  async findOneOrCreate(id: string): Promise<User> {
    let user = await this.findOne(id)

    if (!user) {
      user = await this.create(id)
    }

    return user
  }

  async createOrUpdateCompany(user: User, createCompanyDto: CreateCompanyDto): Promise<Company> {
    if (user.company) {
      return this.companiesService.save({
        ...user.company,
        ...createCompanyDto,
      })
    } else {
      const company = await this.companiesService.save(createCompanyDto)
      user.company = company
      await this.usersRepository.save(user)
      return company
    }
  }

  async findAllUserJobOffers(userId: string): Promise<JobOffer[]> {
    const user = await this.findOne(userId)
    const companyId = user.company.id

    return this.jobOffersService.findAllByCompany(companyId)
  }

  async createJobOffer(userId: string, createJobOfferDto: CreateJobOfferDto): Promise<JobOffer> {
    const user = await this.findOne(userId)
    const company = user.company

    return this.jobOffersService.save(createJobOfferDto, company)
  }

  async updateJobOffer(userId: string, updateJobOfferDto: UpdateJobOfferDto): Promise<JobOffer> {
    const user = await this.findOne(userId)
    const company = user.company
    const jobOffer = await this.jobOffersService.findOne(updateJobOfferDto.id)

    console.log("jobOffer", JSON.stringify(jobOffer, null, 4))

    if (!jobOffer) {
      throw new NotFoundException()
    }

    if (!jobOffer.company.users.map((user) => user.id).includes(userId)) {
      throw new UnauthorizedException()
    }

    return this.jobOffersService.save(updateJobOfferDto, company)
  }
}
