import { Company } from "./Company";

export interface JobOffer {
  id: number;
  name: string;
  description: string;
  company: Company
  salaryFrom: number,
  salaryTo: number,
  type: string
}
