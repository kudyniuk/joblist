import { Body, Controller, Get, Post, Req, Res, UseGuards, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Company, CreateCompanyDto } from '../CompanyModule';
import { JobOffer } from '../JobOffersModule';
import { UserId } from '../decorators';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
@ApiTags("User")
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('company')
  @ApiOperation({ summary: "Return user's company data" })
  @ApiResponse({ status: 200, type: Company, description: "Return user's company data." })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  async getUserCompany(@UserId() userId: UserId): Promise<Company> {
    const user = await this.userService.findOne(userId)

    if (user && user.company) {
      return user.company
    }

    throw new NotFoundException("Not Found Company")
  }

  @Post('company')
  @ApiOperation({ summary: "Update user's company data" })
  async createOrUpdateUserCompany(@UserId() userId: UserId, @Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const user = await this.userService.findOneOrCreate(userId)
    const company = await this.userService.createOrUpdateCompany(user, createCompanyDto)

    return company
  }

  @Get('jobOffers')
  @ApiOperation({ summary: "Return user's job offers data" })
  @ApiResponse({ status: 200, type: [JobOffer], description: "Return user's job offers data." })
  getJobOffers(@UserId() userId: UserId): Promise<JobOffer[]> {
    return this.userService.findAllUserJobOffers(userId)
  }
}
