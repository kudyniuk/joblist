import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {id: id},
      relations: {
        company: true
      }
    });
  }

  create(sub: string): Promise<User> {
    return this.usersRepository.save({
      id: sub
    })
  }


}
