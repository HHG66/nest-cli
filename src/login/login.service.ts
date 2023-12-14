import { ForbiddenException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserDocument } from './schemas/user.schemas'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDocument>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) { }
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
    return await this.userModel.findOne({ username: username })
  }
  //登录
  async login(userInfo: CreateUserDto) {
    // return this.loginService.login(userInfo)
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(userInfo.username, userInfo.password);
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: '00001',
          message: `账号或密码不正确`,
        };
      default:
        return {
          code: '00001',
          message: `查无此人`,
        };
    }


  }

}
