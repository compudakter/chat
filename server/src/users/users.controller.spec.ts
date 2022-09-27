import { OmitType } from '@nestjs/mapped-types';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chatroom } from '../chatrooms/entities/chatroom.entity';
import { Message } from '../messages/entities/message.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          dropSchema:true,
          entities:[User,Chatroom, Message],
          synchronize:true,
          logging:false
        }),
        TypeOrmModule.forFeature([User])
      ],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('Find users by phone or name',async ()=>{
    const user1:CreateUserDto = {
      name:'Abc',
      link:'ddd',
      password:'123',
      phone:'+79811134423',
      email:'sdf'
    }
    const user2:CreateUserDto = {
      name:'Test27',
      link:'ddd',
      password:'233',
      phone:'+79811138976',
      email:'sdf'
    }
    const user3:CreateUserDto = {
      name:'John',
      link:'ddd',
      password:'033',
      phone:'+7271138976',
      email:'sdf'
    }
    
    const created1 = await controller.create(user1)
    const created2 = await controller.create(user2)
    const created3 = await controller.create(user3)
    expect(created1.name).toEqual(created1.name)
    expect(created2.name).toEqual(created2.name)
    expect(created3.name).toEqual(created3.name)
    
    const onlyJohnFound = await controller.searchUsers('Jo')
    expect(onlyJohnFound.length).toBe(1)
    expect(onlyJohnFound[0].name).toBe(created3.name)
    
    const listOf981Phone = await controller.searchUsers('981')
    expect(listOf981Phone.length).toBe(2)
    expect(listOf981Phone[0].phone).toBe(created1.phone)
    expect(listOf981Phone[1].phone).toBe(created2.phone)

    const listOfPhoneAndName = await controller.searchUsers('27')
    expect(listOfPhoneAndName.length).toBe(2)
    expect(listOfPhoneAndName[0].name).toBe(created2.name)
    expect(listOfPhoneAndName[1].name).toBe(created3.name)
  })
});
 

