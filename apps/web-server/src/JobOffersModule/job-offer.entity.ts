import { JobOffer as JobOfferI } from "@kudyniuk/shared-types"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { Company } from "../CompanyModule"

@Entity()
export class JobOffer<CompanyType = Company> implements JobOfferI<CompanyType> {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  salaryFrom: number

  @Column()
  salaryTo: number

  @Column()
  type: string

  @ManyToOne(() => Company, (company) => company.jobOffers)
  company: CompanyType
}
