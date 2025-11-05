import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpException,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.servies';
import { CreateUserDto } from './CreateUser.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserByID(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User not found', 404);
    const findUser = await this.userService.getUserByID(id);
    if (!findUser) throw new HttpException('User not found', 404);
    return findUser;
  }

  @Patch(':id')
  updateUser() {}
}
