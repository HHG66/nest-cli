/*
 * @Author: HHG
 * @Date: 2023-12-11 19:19:00
 * @LastEditTime: 2023-12-11 20:14:15
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\login\dto\create-user.ts
 * @文件说明: 
 */
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username:string

  @IsNotEmpty()
  @IsString()
  password:string
}
  