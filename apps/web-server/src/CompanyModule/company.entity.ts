import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Company as CompanyI } from 'shared-types';
import { JobOffer } from 'src/JobOffersModule';

@Entity()
export class Company implements CompanyI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => JobOffer, (jobOffer) => jobOffer.company)
  jobOffers: JobOffer[]
}
