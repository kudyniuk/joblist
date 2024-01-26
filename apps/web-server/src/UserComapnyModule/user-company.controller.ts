import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

import { CreateCompanyDto } from "./create-company.dto"
import { UserId } from "../decorators"
import { UserCompanyService } from "./user-company.service"
import { Company } from "@prisma/client"

@Controller("user/company")
@UseGuards(AuthGuard("jwt"))
@ApiTags("User")
export class UserCompanyController {
  constructor(private readonly userCompanyService: UserCompanyService) { }

  @Get()
  @ApiOperation({ summary: "Return user's company data" })
  @ApiResponse({
    status: 200,
    description: "Return user's company data.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 404, description: "Not found." })
  async getUserCompany(@UserId() userId: UserId): Promise<Company> {
    const company = await this.userCompanyService.findUnique(userId)

    if (!company) throw new NotFoundException("Company - Not Found")

    return company
  }

  @Post()
  @ApiOperation({ summary: "Update user's company data" })
  async createOrUpdateUserCompany(@UserId() userId: UserId, @Body() createCompanyDto: CreateCompanyDto) {
    return await this.userCompanyService.createOrUpdate(userId, createCompanyDto)
  }
}
