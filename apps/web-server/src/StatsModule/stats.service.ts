import { PopularVacancy, Stats } from "@kudyniuk/shared-types"
import { Inject, Injectable } from "@nestjs/common"

import { CompaniesService } from "../CompanyModule"
import { JobOffersService } from "../JobOffersModule/job-offers.service"

@Injectable()
export class StatsService {
  constructor(
    @Inject(CompaniesService)
    private companiesService: CompaniesService,
    @Inject(JobOffersService)
    private jobOffersService: JobOffersService,
  ) {}

  async getStats(): Promise<Stats> {
    const companies = await this.companiesService.findAll()
    const jobsOffers = await this.jobOffersService.findAll()

    const popularVacancies: PopularVacancy[] = Object.entries(
      jobsOffers.reduce(
        (acc, jobOffer) => {
          const key = jobOffer.name
          const hasKey = Object.keys(acc).includes(key)

          return {
            ...acc,
            [key]: hasKey ? acc[key] + 1 : 1,
          }
        },
        {} as Record<string, number>,
      ),
    ).map(([name, value]) => ({ name, value }))

    return {
      jobOffers: jobsOffers.length,
      companies: companies.length,
      newJobOffers: jobsOffers.length,
      popularVacancies,
    }
  }
}
