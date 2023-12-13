import { Injectable } from '@nestjs/common';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthService {
  constructor(private loginServe: LoginService) {

  }
  async validateUser(username: string, password: string) {
    const user = await this.loginServe.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
