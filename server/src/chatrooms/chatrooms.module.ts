import { Module } from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { ChatroomsController } from './chatrooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/users/entities/user.entity';
import { Chatroom } from './entities/chatroom.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Chatroom,User,Message])],
  controllers: [ChatroomsController],
  providers: [ChatroomsService]
})
export class ChatroomsModule {}
