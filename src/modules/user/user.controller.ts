import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(parseInt(id, 10));
  }

  @Post()
  async create(@Body() todo: User): Promise<User> {
    return this.usersService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todo: User,
  ): Promise<User> {
    return this.usersService.update(parseInt(id, 10), todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(parseInt(id, 10));
  }
}
