import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './create-company.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('companies')
@ApiTags("Company")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) { }

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Company> {
    return this.companiesService.findOne(id);
  }
}
