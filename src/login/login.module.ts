import { Module, forwardRef } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/user.schemas'
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  imports: [
    // forwardRef(() => JwtService),
    forwardRef(() => AuthModule),
    // forwardRef(() => JwtModule),
    MongooseModule.forFeature([{ name: 'User', schema: CatSchema }])],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule { }
