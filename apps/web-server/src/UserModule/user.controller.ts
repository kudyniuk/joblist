import { Body, Controller, Get, Post, Req, Res, UseGuards, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Company } from 'shared-types';
import { UserService } from './user.service';
import { CreateCompanyDto } from '../CompanyModule';
import { JobOffer } from 'src/JobOffersModule';
import { UserId } from 'src/decorators';

interface User {
  sub: string
}

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('company')
  async getUserCompany(@UserId() userId: UserId): Promise<Company> {
    const user = await this.userService.findOne(userId)

    if(user && user.company) {
      return user.company
    }

    throw new NotFoundException("Not Found Company")
  }

  @Post('company')
  async createOrUpdateUserCompany(@UserId() userId: UserId, @Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const user = await this.userService.findOneOrCreate(userId)
    const company = await this.userService.createOrUpdateCompany(user, createCompanyDto)

    return company
  }

  @Get('jobOffers')
  getJobOffers(@UserId() userId: UserId): Promise<JobOffer[]> {
    return this.userService.findAllUserJobOffers(userId)
  }
}
