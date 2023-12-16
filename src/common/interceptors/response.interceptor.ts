/*
 * @Author: HHG
 * @Date: 2023-12-15 11:20:15
 * @LastEditTime: 2023-12-16 10:52:44
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\common\interceptors\response.interceptor.ts
 * @文件说明: 
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  // intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): any {
    // console.log('service执行前');
    // const response = context.switchToHttp().getResponse()
    // console.log(response);
    return next.handle().pipe(map(data => {
      let resMessage = data.message||'请求成功'
      let resCode = data.code
      delete data.message
      if (data.code && data.code !== 0) {
        delete data.code
        return {
          code: resCode,
          error: resMessage,
          data: []
        }
      }
      return {
        code: 0,
        message: resMessage,
        data: data
      }
    }));
  }
}