import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUserDto } from './dto/create-user';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/common/decorators/isPublic.decorator';

@Controller('admin')
export class LoginController {
  constructor(private readonly loginService: LoginService,
    // private readonly AuthService: AuthService
    ) { }
  //登录，用户管理做到单独的角色管理系统
  @Public()
  @Post('login')
  async login(@Body() userInfo: CreateUserDto) {
    return this.loginService.login(userInfo)
  }

  //创建用户
  @Post('createuser')
  // @UseGuards(AuthGuard('jwt'))
  createuser(@Body() userInfo: CreateUserDto) {
    return this.loginService.createUser(userInfo);
  }

  //ceshi
  @Post('test')
  test() {
    return '123'

  }

}
