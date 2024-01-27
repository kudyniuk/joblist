import { ICreateJobOffer } from "@kudyniuk/shared-types"
import { IsNotEmpty, MinLength } from "class-validator"

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
