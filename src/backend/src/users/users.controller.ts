import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.servies';
import { CreateUserDto } from './User.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }
}
