import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import {ResponseInterceptor} from '@/common/interceptors/response.interceptor'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //全局管道
  app.useGlobalPipes(new ValidationPipe())
  //全局守卫
  // app.useGlobalGuards(JwtStrategy);
  //全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}

bootstrap();
