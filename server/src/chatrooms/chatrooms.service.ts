import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../messages/entities/message.entity';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { Chatroom } from './entities/chatroom.entity';
import { CreateMessageDto } from '../messages/dto/create-message.dto';

@Injectable()
export class ChatroomsService {
  constructor(@InjectRepository(Chatroom) private chatRoomRepository: Repository<Chatroom>) { }
  async create(createChatroomDto: CreateChatroomDto) {
    return await this.chatRoomRepository.save(createChatroomDto)
  }
  async sendMessage(roomId:number, createMessage:CreateMessageDto) {
   const {text,timestamp} = createMessage
     
   try{
    return  await this.chatRoomRepository.manager.transaction(async entityManager =>{
      const ownerId = createMessage.userId
      const owner = await entityManager.findOne(User,{where:{id:ownerId}})
      const chatRoom = await entityManager.findOne(Chatroom,{where:{id:roomId}})
      
      const message:Message = new Message()      
      message.chatRoom = chatRoom
      message.user=owner,
      message.text = text
      message.timestamp = timestamp

      const savedMessage:Message = await entityManager.save(message)
      savedMessage.user = owner 
      message.chatRoom = chatRoom 
      
      if(!chatRoom.messages?.length){
        chatRoom.messages = []
      }
      chatRoom.messages.push(savedMessage)
      const savedChatroom = await entityManager.save(chatRoom) 
      
       return savedMessage
    })


     
   }catch(e){
    console.log('error===',e)
    
    throw Error('Fail to send message')
   }  
  }
  async findAll() {
    return await this.chatRoomRepository.find()
  }

  async findOne(id: number) {
    return await this.chatRoomRepository.findOne({ where: { id },relations:['members','messages'] })
  }

  async update(id: number, updateChatroomDto: UpdateChatroomDto) {
    return "update"
  }

  async remove(id: number) {
    return await this.chatRoomRepository.delete(id)
  }
}
