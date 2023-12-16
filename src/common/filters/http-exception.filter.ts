/*
 * @Author: HHG
 * @Date: 2023-12-16 09:05:38
 * @LastEditTime: 2023-12-16 10:18:21
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\common\filters\http-exception.filter.ts
 * @文件说明: 
 */
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.getResponse()

    response
      .status(status)
      .json(message);
  }
}