import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserDocument } from './schemas/user.schemas'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user';
@Injectable()
export class LoginService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) { }
  //简易的创建用户
  async createUser(createUser: CreateUserDto) {
    let userInfo = {
      ...createUser,
      createDate: new Date(),
      updataDate: new Date()
    }
    const createUsers = new this.userModel(userInfo);
    const resule = await createUsers.save();
    return resule;
  }
  //查找用户
  async findOne(username: string): Promise<CreateUserDto | undefined> {
    return await this.userModel.findOne({ username: username})
  }
  //登录
  async login(userInfo: CreateUserDto) {
    let result = await this.userModel.findOne({ username: userInfo.username, password: userInfo.password })
    if (result) {
      return {
        data: {
          token: '1'
        },
        message: '登陆成功',
        code: '00000'
      }
    } else {
      return '用户名或密码错误'
    }
  }

}
