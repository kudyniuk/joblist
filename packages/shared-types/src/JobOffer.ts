import { Company } from "./Company"

export interface JobOffer<CompanyType = Company> {
  id: number
  name: string
  description: string
  salaryFrom: number
  salaryTo: number
  type: string

  company: CompanyType
}

export type CreateJobOffer = Omit<JobOffer, "id" | "company">
export type UpdateJobOffer = Omit<JobOffer, "company">
