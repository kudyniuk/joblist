import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { CreateJobOfferDto } from './create-job-offer.dto';
import { JobOffer } from './job-offer.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('jobOffers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) {}

  // @UseGuards(AuthGuard("jwt"))
  @Get()
  getAll(): Promise<JobOffer[]> {
    return this.jobOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<JobOffer> {
    return this.jobOffersService.findOne(id);
  }

  @Post()
  create(@Body() createJobOfferDto: CreateJobOfferDto): Promise<JobOffer> {
    return this.jobOffersService.create(createJobOfferDto);
  }

  @Delete(':id')
  remove(@Param("id") id: number): Promise<JobOffer> {
    return this.jobOffersService.removeOne(id)
  } 
}
