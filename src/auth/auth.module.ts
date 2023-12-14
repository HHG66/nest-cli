import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginModule } from 'src/login/login.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constats';
import { JwtStrategy } from './jwt.strategy'
@Module({
  imports: [
    forwardRef(() => LoginModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // //设置加密使用的 secret
      secret: jwtConstants.secret,
      // //过期时间
      signOptions: { expiresIn: jwtConstants.accessTokenExpiresIn },
    }),
  ],
  // controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
