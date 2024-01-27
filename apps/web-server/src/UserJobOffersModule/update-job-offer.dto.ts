import { PartialType } from "@nestjs/mapped-types"
import { IUpdateJobOffer } from "@kudyniuk/shared-types"
import { CreateJobOfferDto } from './create-job-offer.dto'

export class UpdateJobOfferDto extends PartialType(CreateJobOfferDto) implements IUpdateJobOffer { }