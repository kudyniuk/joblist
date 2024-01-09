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


  @ManyToOne(() => Company, (company) => company.jobOffers)
  company: Company 
}
