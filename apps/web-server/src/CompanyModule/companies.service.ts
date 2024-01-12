import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companiesRepository.findOneBy({ id });
  }

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.save(createCompanyDto);
  }

  update(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.save(createCompanyDto)
  }
}
