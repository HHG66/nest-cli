import { SetMetadata } from "@nestjs/common";

/*
 * @Author: HHG
 * @Date: 2023-12-14 11:39:49
 * @LastEditTime: 2023-12-14 11:58:21
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\common\decorators\isPublic.decorator.ts
 * @文件说明: 
 */
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => {

 return SetMetadata(IS_PUBLIC_KEY, true)
}