/*
 * @Author: HHG
 * @Date: 2024-11-18 11:38:25
 * @LastEditTime: 2024-11-18 20:48:07
 * @LastEditors: 韩宏广
 * @FilePath: \financial-serve\src\utils\response.ts
 * @文件说明:
 */
export class ResponseDto<T> {
  status: number; //状态码
  code: string; //业务状态码
  message: string; //业务提示信息
  data: T; //返回值
  meta?: any; // 可以用来存储分页等元数据
  error?: string | null; // 错误信息，失败时才会出现
  constructor(
    data: T,
    status: number,
    code: string,
    message: string,
    meta?: any,
    error?: string | null
  ) {
    this.status = status; //状态码
    this.code = code;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.error = error;
  }

  /**
   * @description:返回成功方法,带返回值
   * @param {string} message 成功提示
   * @param {T} data 数据
   * @param {any} meta 分页等附加
   * @return {*} ResponseDto实例，请求返回
   * @author: 韩宏广
   */
  static success<T>(data: T, meta?: any, message?: string): ResponseDto<T> {
    return new ResponseDto(
      data,
      200,
      '0',
      message ? message : '请求成功',
      meta
    );
  }
  /**
   * @description: 
   * @param {T} data
   * @param {any} meta
   * @param {string} message
   * @return {*}
   * @author: 韩宏广
   */
  static error<T>(data: T, meta?: any, message?: string): ResponseDto<T> {
    return new ResponseDto(
      data,
      200,
      '0',
      message ? message : '请求成功',
      meta
    );
  }
}
