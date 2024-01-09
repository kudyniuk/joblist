import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { AuthZModule } from './AuthZModule';
import { JobOffersModule } from './JobOffersModule';
import { CompaniesModule } from './CompanyModule';

@Module({
  imports: [DatabaseModule, AuthZModule, CompaniesModule, JobOffersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
