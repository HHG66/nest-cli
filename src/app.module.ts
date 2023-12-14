import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './common/guards/jwtAuth.guards';
import { LoginService } from './login/login.service';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [LoginModule,AuthModule,MongooseModule.forRoot('mongodb://han:han1314.@1.25.137.159:27018/website')],
  // mongodb://han:han1314.@1.25.137.159:27018/website
  controllers: [ ],
  providers: [
    // LoginService,AuthService,
    {
      provide: APP_GUARD,
      // useClass: AuthGuard('jwt'),
      useClass: JwtAuthGuard,
    },  
   ],
})
export class AppModule {}