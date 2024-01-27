import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'
import { ICreateJobOffer, IUpdateJobOffer } from "@kudyniuk/shared-types"

export class CreateJobOfferDto implements ICreateJobOffer {
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @IsNotEmpty()
  @MinLength(6)
  description: string

  type: string
  salaryFrom: number
  salaryTo: number
}