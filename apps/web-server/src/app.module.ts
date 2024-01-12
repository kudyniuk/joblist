import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { AuthZModule } from './AuthZModule';
import { JobOffersModule } from './JobOffersModule';
import { CompaniesModule } from './CompanyModule';
import { UserModule } from './UserModule/user.module';

@Module({
  imports: [DatabaseModule, AuthZModule, CompaniesModule, JobOffersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
