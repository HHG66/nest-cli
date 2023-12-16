import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import {ResponseInterceptor} from '@/common/interceptors/response.interceptor'
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //全局管道
  app.useGlobalPipes(new ValidationPipe())
  //全局守卫
  // app.useGlobalGuards(JwtStrategy);
  //全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  //全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}

bootstrap();
