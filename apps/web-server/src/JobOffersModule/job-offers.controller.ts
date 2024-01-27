import { Controller, Get, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { JobOffersService } from "./job-offers.service"

@Controller("jobOffers")
@ApiTags("Jobs")
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get()
  getAll() {
    return this.jobOffersService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.jobOffersService.findOne(id)
  }
}
