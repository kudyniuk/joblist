import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './create-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Company> {
    return this.companiesService.findOne(id);
  }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }
}