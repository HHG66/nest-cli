import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/user.schemas'
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: CatSchema }])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule { }
