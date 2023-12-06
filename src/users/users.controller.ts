import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UsersEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UsersEntity> {
    return this.usersService.findById(parseInt(id, 10));
  }

  @Post()
  async create(@Body() todo: UsersEntity): Promise<UsersEntity> {
    return this.usersService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todo: UsersEntity,
  ): Promise<UsersEntity> {
    return this.usersService.update(parseInt(id, 10), todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(parseInt(id, 10));
  }
}
