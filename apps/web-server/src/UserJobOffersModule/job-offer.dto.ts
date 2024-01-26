import { ICreateJobOffer, IUpdateJobOffer } from "@kudyniuk/shared-types"
import { IsNotEmpty, MinLength } from "class-validator"
import { PartialType } from "@nestjs/swagger"

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

export class UpdateJobOfferDto extends PartialType(CreateJobOfferDto) implements IUpdateJobOffer { }
