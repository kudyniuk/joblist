import { Test, TestingModule } from "@nestjs/testing"

import { CompaniesController } from "./companies.controller"
import { CompaniesService } from "./companies.service"

describe("CompaniesController", () => {
  let appController: CompaniesController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [CompaniesService],
    }).compile()

    appController = app.get<CompaniesController>(CompaniesController)
  })

  describe("root", () => {
    it('should return ["Hello World!"]', () => {
      expect(appController.getAll()).toBe(["Hello World!"])
    })
  })
})
