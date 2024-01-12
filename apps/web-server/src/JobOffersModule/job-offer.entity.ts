import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { JobOffer as JobOfferI } from 'shared-types';
import { Company } from '../CompanyModule'

@Entity()
export class JobOffer implements JobOfferI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  salaryFrom: number;

  @Column()
  salaryTo: number;

  @Column()
  type: string;

  @ManyToOne(() => Company, (company) => company.jobOffers)
  company: Company 

}
