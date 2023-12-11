import { Injectable } from '@nestjs/common';
import { UserDocument } from './schemas/user.schemas'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user';
 
@Injectable()
export class LoginService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) { }
  //登录逻辑
  async login(createUser: CreateUserDto) {
    const createUsers = new this.userModel(createUser);
    const resule = await createUsers.save();
    return resule;
  }

}
