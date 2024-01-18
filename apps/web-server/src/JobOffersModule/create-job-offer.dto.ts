import { IsNotEmpty, MinLength } from "class-validator"

export class CreateJobOfferDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @IsNotEmpty()
  @MinLength(6)
  description: string

  @IsNotEmpty()
  companyId: number
}
