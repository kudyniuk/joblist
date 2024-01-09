import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';

describe('JobOffersController', () => {
  let appController: JobOffersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobOffersController],
      providers: [JobOffersService],
    }).compile();

    appController = app.get<JobOffersController>(JobOffersController);
  });

  describe('root', () => {
    it('should return ["Hello World!"]', () => {
      expect(appController.getAll()).toBe(['Hello World!']);
    });
  });
});
