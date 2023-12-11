/*
 * @Author: HHG
 * @Date: 2023-12-11 18:11:15
 * @LastEditTime: 2023-12-11 19:15:31
 * @LastEditors: 韩宏广
 * @FilePath: \website\src\login\schemas\user.schemas.ts
 * @文件说明: 
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: number;

  @Prop()
  password: string;
}

export const CatSchema = SchemaFactory.createForClass(User);