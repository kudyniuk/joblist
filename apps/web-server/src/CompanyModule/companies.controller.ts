import { Controller, Get, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { CompaniesService } from "./companies.service"
import { Company } from "./company.entity"

@Controller("companies")
@ApiTags("Company")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<Company> {
    return this.companiesService.findOne(id)
  }
}
