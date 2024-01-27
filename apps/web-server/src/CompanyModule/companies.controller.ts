import { Controller, Get, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { CompaniesService } from "./companies.service"

@Controller("companies")
@ApiTags("Company")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getAll() {
    return this.companiesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.companiesService.findOne(id)
  }
}
