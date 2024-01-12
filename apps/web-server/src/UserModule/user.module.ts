import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CompaniesModule } from '../CompanyModule';
import { JobOffersModule } from '../JobOffersModule';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CompaniesModule, JobOffersModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
