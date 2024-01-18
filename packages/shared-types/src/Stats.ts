export type PopularVacancy = {
  name: string
  value: number
}

export interface Stats {
  jobOffers: number
  companies: number
  // candidates?: number not implemented
  newJobOffers: number
  popularVacancies: PopularVacancy[]
}
