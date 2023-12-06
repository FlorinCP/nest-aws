import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  /*
  
  The @InjectRepository decorator works by leveraging the dependency injection system provided by NestJS.
  Under the hood, it creates a new instance of the repository for each request,
  and ensures that the same instance is used throughout the entire request lifecycle. This helps to avoid issues with stateful repositories and ensures that each request is handled independently.
  
   */

  async findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }

  async findById(id: number): Promise<UsersEntity> {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async create(user: UsersEntity): Promise<UsersEntity> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: UsersEntity): Promise<UsersEntity> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
