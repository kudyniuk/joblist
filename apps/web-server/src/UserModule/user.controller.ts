import { Body, Controller, Get, NotFoundException, Patch, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

import { Company, CreateCompanyDto } from "../CompanyModule"
import { UserId } from "../decorators"
import { CreateJobOfferDto, UpdateJobOfferDto } from "../JobOffersModule"
import { JobOffer } from "../JobOffersModule"
import { UserService } from "./user.service"

@Controller("user")
@UseGuards(AuthGuard("jwt"))
@ApiTags("User")
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("company")
  @ApiOperation({ summary: "Return user's company data" })
  @ApiResponse({
    status: 200,
    type: Company,
    description: "Return user's company data.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 404, description: "Not found." })
  async getUserCompany(@UserId() userId: UserId): Promise<Company> {
    const user = await this.userService.findOne(userId)

    if (user && user.company) {
      return user.company
    }

    throw new NotFoundException("Not Found Company")
  }

  @Post("company")
  @ApiOperation({ summary: "Update user's company data" })
  async createOrUpdateUserCompany(@UserId() userId: UserId, @Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const user = await this.userService.findOneOrCreate(userId)
    const company = await this.userService.createOrUpdateCompany(user, createCompanyDto)

    return company
  }

  @Get("jobOffers")
  @ApiOperation({ summary: "Return user's job offers data" })
  @ApiResponse({
    status: 200,
    type: [JobOffer],
    description: "Return user's job offers data.",
  })
  getJobOffers(@UserId() userId: UserId): Promise<JobOffer[]> {
    return this.userService.findAllUserJobOffers(userId)
  }

  @Post("jobOffers")
  async createJobOffer(@UserId() userId: UserId, @Body() createJobOfferDto: CreateJobOfferDto): Promise<JobOffer> {
    return this.userService.createJobOffer(userId, createJobOfferDto)
  }

  @Patch("jobOffers")
  async updateJoboffer(@UserId() userId: UserId, @Body() updateJobOfferDto: UpdateJobOfferDto): Promise<JobOffer> {
    return this.userService.updateJobOffer(userId, updateJobOfferDto)
  }
}
