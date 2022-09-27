import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { MessagesModule } from './messages/messages.module';
import { Chatroom } from './chatrooms/entities/chatroom.entity';
import { Message } from './messages/entities/message.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';

const mode = process.env.NODE_ENV||'development'
const isDevelopment = mode === 'development' 
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`${mode}.env`
    }),
    
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService:ConfigService)=>({
      type:configService.get<any>("DB_TYPE"),
      host:configService.get<string>("DB_HOST"),
      port:configService.get<number>("DB_PORT"),
      username:configService.get<string>("DB_USERNAME"),
      password:configService.get<string>("DB_PASSWORD"),
      database:configService.get<string>("DB_DATABASE"),
      synchronize: isDevelopment,
      logging: isDevelopment,
      entities:[User,Message,Chatroom]
      }),
      inject: [ConfigService]
      // type:'postgres',
      // host:'localhost',
      // port:5432,
      // username:'postgres',
      // password:'password',
      // database:'chat',
      // entities:[User,Message,Chatroom]
    }),
    UsersModule,
    ChatroomsModule,
    MessagesModule,
    TokenModule,
    AuthModule],
  controllers: [AppController], 
  providers: [AppService ],
})
export class AppModule {}
