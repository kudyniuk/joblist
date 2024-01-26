import { Company } from "./Company"

export interface IJobOffer {
  id: number
  name: string
  description: string
  salaryFrom: number
  salaryTo: number
  type: string

  company: Company
}

export type ICreateJobOffer = Omit<IJobOffer, "id" | "company">
export type IUpdateJobOffer = Partial<ICreateJobOffer>





