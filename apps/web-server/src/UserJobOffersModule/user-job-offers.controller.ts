import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

import { UserId } from "../decorators"
import { CreateJobOfferDto } from "./create-job-offer.dto"
import { UpdateJobOfferDto } from "./update-job-offer.dto"
import { UserJobOffersService } from "./user-job-offers.service"

@Controller("user/job-offers")
@UseGuards(AuthGuard("jwt"))
@ApiTags("User")
export class UserJobOffersController {
  constructor(private readonly userJobOffersService: UserJobOffersService) {}

  @Get()
  @ApiOperation({ summary: "Return user's job offers data" })
  @ApiResponse({
    status: 200,
    description: "Return user's job offers data.",
  })
  getJobOffers(@UserId() userId: UserId) {
    return this.userJobOffersService.findAll(userId)
  }

  @Post()
  async createJobOffer(@UserId() userId: UserId, @Body() createJobOfferDto: CreateJobOfferDto) {
    return this.userJobOffersService.create(userId, createJobOfferDto)
  }

  @Patch(":id")
  async updateJoboffer(@Param("id", ParseIntPipe) id: number, @UserId() userId: UserId, @Body() updateJobOfferDto: UpdateJobOfferDto) {
    return this.userJobOffersService.update(id, userId, updateJobOfferDto)
  }
}
