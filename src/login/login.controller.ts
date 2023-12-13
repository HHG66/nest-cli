import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUserDto } from './dto/create-user';

@Controller('admin')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }
  //登录，用户管理做到单独的角色管理系统
  @Post('login')
  login(@Body() userInfo: CreateUserDto) {
    return this.loginService.login(userInfo)
  }

  //创建用户
  @Post('createuser')
  createuser(@Body() userInfo: CreateUserDto) {
    return this.loginService.createUser(userInfo);
  }
}
