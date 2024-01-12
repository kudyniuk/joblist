import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Company } from 'shared-types';
import { UserService } from './user.service';
import { CreateCompanyDto } from '../CompanyModule';
import { JobOffer } from 'src/JobOffersModule';

interface User {
  sub: string
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/company')
  @UseGuards(AuthGuard('jwt'))
  async getUserCompany(@Req() req: Request, @Res() res: Response): Promise<Company> {

    if(!req.user) {
      res.status(401).send()
      return
    }

    const id = (req.user as User).sub

    const user = await this.userService.findOne(id)

    if(!user) {
      this.userService.create(id)      
      res.status(404).send()
      return
    }

    if(user.company) {
      res.send(user.company)
      return
    } else {
      res.status(404).send()
    }
  }

  @Post('/company')
  @UseGuards(AuthGuard('jwt'))
  async createOrUpdateUserCompany(@Req() req: Request, @Res() res: Response, @Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    if(!req.user) {
      res.status(401).send()
      return
    }

    const id = (req.user as User).sub
    const user = await this.userService.findOne(id)

    if(!user) {
      res.status(504).send()
    }

    const company = await this.userService.createOrUpdateCompany(user.id, createCompanyDto)

    res.send(company)
    return 
  }

  @Get('jobOffers')
  @UseGuards(AuthGuard('jwt'))
  getJobOffers(@Req() req: Request): Promise<JobOffer[]> {
    const userId = (req.user as User).sub

    return this.userService.findAllUserJobOffers(userId)
  }
}
