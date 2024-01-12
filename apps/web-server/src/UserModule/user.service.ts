import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CompaniesService, Company, CreateCompanyDto } from '../CompanyModule';
import { JobOffer } from 'src/JobOffersModule';
import { JobOffersService } from 'src/JobOffersModule/job-offers.service';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(CompaniesService)
    private companiesService: CompaniesService,
    @Inject(JobOffersService)
    private jobOffersService: JobOffersService
  ) {}

  findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {id: id},
      relations: {
        company: true
      }
    });
  }

  create(sub: string): Promise<User> {
    return this.usersRepository.save({
      id: sub
    })
  }

  async createOrUpdateCompany(userId: string, createCompanyDto: CreateCompanyDto): Promise<Company> {
    const user = await this.findOne(userId)
    const company = user.company

    if(company) {
      return this.companiesService.update({
        ...company,
        ...createCompanyDto
      })
    } else {
      const company = await this.companiesService.create(createCompanyDto)
      user.company = company
      this.usersRepository.save(user)
      return company
    }
  }

  async findAllUserJobOffers(userId: string): Promise<JobOffer[]> {
    const user = await this.findOne(userId)
    const companyId = user.company.id

    return this.jobOffersService.findAllByCompany(companyId)
  }
}
