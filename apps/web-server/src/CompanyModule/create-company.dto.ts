import { IsNotEmpty, MinLength } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @MinLength(12)
  address: string;
}
