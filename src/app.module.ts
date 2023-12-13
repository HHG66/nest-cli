import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [LoginModule,MongooseModule.forRoot('mongodb://han:han1314.@1.25.137.159:27018/website')],
  // mongodb://han:han1314.@1.25.137.159:27018/website
  controllers: [ ],
  providers: [ ],
})
export class AppModule {}