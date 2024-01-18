import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Company } from "./company.entity"
import { CreateCompanyDto } from "./create-company.dto"

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find()
  }

  findOne(id: number): Promise<Company> {
    return this.companiesRepository.findOneBy({ id })
  }

  save(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.save(createCompanyDto)
  }
}
