/*
 * @Author: HHG
 * @Date: 2023-12-14 08:44:20
 * @LastEditTime: 2023-12-14 20:08:03
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\auth\jwt.strategy.ts
 * @文件说明: 
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../../constants/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: any) {
    // console.log(`JWT验证 - Step 4: 被守卫调用`);
    return {  username: payload.username};
  }
}

