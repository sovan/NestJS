import { Injectable } from '@nestjs/common';
import { User } from './User.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }

  getUserByID(id: string) {
    return this.userModel.findById(id);
  }
}
