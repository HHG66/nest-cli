import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/login/dto/create-user';
import { LoginService } from 'src/modules/login/login.service';


@Injectable()
export class AuthService {
  constructor(
    // private loginServe: LoginService,
    private readonly jwtService: JwtService,


    @Inject(forwardRef(() => LoginService))
    private readonly loginServe: LoginService,
  ) {}
  // async validateUser(username: string, password: string) {
  //   const user = await this.loginServe.findOne(username);
  //   if (user && user.password === password) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // JWT验证 - Step 2: 校验用户信息
  async validateUser(username: string, password: string): Promise<any> {
    // console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.loginServe.findOne(username);
    if (user) {
      const Password = user.password;
      //明文密码
      if (Password === password) {
        // 密码正确
        return {
          code: 1,
          user,
        };
      } else {
        // 密码错误
        return {
          code: 2,
          user: null,
        };
      }
    }
    // 查无此人
    return {
      code: 3,
      user: null,
    };
  }

  // JWT验证 - Step 3: 处理得到 jwt 签证
  async certificate(user: CreateUserDto) {
    const payload = { username: user.username };
    // console.log('JWT验证 - Step 3: 处理 jwt 签证');
    try {
      const token = this.jwtService.sign(payload);
      return {
        code: '00000',
        data: {
          token,
        },
        message: `登录成功`,
      };
    } catch (error) {
      return {
        code: '00001',
        message: `账号或密码错误`,
      };
    }
  }


}
