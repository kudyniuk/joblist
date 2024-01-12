import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Company } from 'shared-types';
import { UserService } from './user.service';


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
}
