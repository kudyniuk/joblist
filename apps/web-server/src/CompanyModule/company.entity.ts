import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Company as CompanyI } from 'shared-types';
import { JobOffer } from '../JobOffersModule';
import { User } from "../UserModule"

@Entity()
export class Company implements CompanyI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => JobOffer, (jobOffer) => jobOffer.company)
  jobOffers: JobOffer[]

  @OneToMany(() => User, (user) => user.company)
  users: User[]
}
