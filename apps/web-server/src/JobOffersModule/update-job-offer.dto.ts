import { IsNotEmpty, IsNumber } from "class-validator"

import { CreateJobOfferDto } from "./create-job-offer.dto"

export class UpdateJobOfferDto extends CreateJobOfferDto {
  @IsNotEmpty()
  @IsNumber()
  id: number
}
