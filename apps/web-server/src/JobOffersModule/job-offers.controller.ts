import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { CreateJobOfferDto } from "./create-job-offer.dto"
import { JobOffer } from "./job-offer.entity"
import { JobOffersService } from "./job-offers.service"

@Controller("jobOffers")
@ApiTags("Jobs")
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) { }

  @Get()
  getAll(): Promise<JobOffer[]> {
    return this.jobOffersService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<JobOffer> {
    return this.jobOffersService.findOne(id)
  }
}
