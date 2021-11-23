import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import {v4} from 'uuid';

@Injectable()
export class RegisterService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find({}).exec()
  }

  getById(id: string): Promise<User> {
    return this.userModel.findOne({id}).exec()
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({...user, uid: await this.userModel.count() + 1, activateCode: v4()})

    return newUser.save()
  } 
}
