import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../messages/entities/message.entity';
import { User } from '../users/entities/user.entity';
import { ChatroomsController } from './chatrooms.controller';
import { ChatroomsService } from './chatrooms.service';
import { Chatroom } from '../chatrooms/entities/chatroom.entity';
import { UsersController } from '../users/users.controller';
import { MessagesController } from '../messages/messages.controller';
import { MessagesService } from '../messages/messages.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { CreateMessageDto } from '../messages/dto/create-message.dto';

describe('ChatroomsController', () => {
  let controller: ChatroomsController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          dropSchema: true,
          entities: [User, Chatroom, Message],
          synchronize: true,
          logging: false
        }),

        TypeOrmModule.forFeature([Chatroom, User, Message])
      ],
      controllers: [ChatroomsController, UsersController, MessagesController],
      providers: [ChatroomsService, UsersService, MessagesService],
    }).compile();

    controller = module.get<ChatroomsController>(ChatroomsController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('Send message script', async () => {
    const user1: CreateUserDto = {
      name: 'test1',
      password: '123',
      phone: "+79811135524",
    }
    const user2: CreateUserDto = {
      name: 'test1',
      password: '123',
      phone: "+79811135524",
    }
    const createdUser1 = await usersService.create(user1)
    const createdUser2 = await usersService.create(user2)
    expect(createdUser1.name).toBe(user1.name)
    expect(createdUser2.name).toBe(user2.name)

    const chatRoom: CreateChatroomDto = {
      members: [createdUser1, createdUser2]
    }

    const createdChatRoom = await controller.create(chatRoom) 
    expect(createdChatRoom.members).toEqual(chatRoom.members)

    const message: CreateMessageDto = {
      text: 'test message from user 1',
      timestamp: Date.now(),
      userId: createdUser1.id,
      chatRoomId: createdChatRoom.id

    }
 

    const sentMessage = await controller.sendMessage(createdChatRoom.id, message)
    expect(sentMessage.text).toBe(message.text)
    const createdChatRoomFound = await controller.findOne(`${createdChatRoom.id}`) 
    expect(createdChatRoomFound.members).toEqual(createdChatRoom.members)
    expect(createdChatRoomFound.messages.length).toBe(1)
    expect(createdChatRoomFound.messages[0].id).toEqual(sentMessage.id)
  });
});
