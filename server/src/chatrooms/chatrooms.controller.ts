import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateMessageDto } from '../messages/dto/create-message.dto';
import { Message } from '../messages/entities/message.entity';
import { ChatroomsService } from './chatrooms.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';

@Controller('chatrooms')
export class ChatroomsController {
  constructor(private readonly chatroomsService: ChatroomsService) {}

  @Post('send/:roomId')
  sendMessage(@Param('roomId') roomId:number,@Body() message:CreateMessageDto ){
    return this.chatroomsService.sendMessage(roomId, message)
  }

  @Post()
  create(@Body() createChatroomDto: CreateChatroomDto) {
    return this.chatroomsService.create(createChatroomDto);
  }

  @Get()
  findAll() {
    return this.chatroomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatroomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatroomDto: UpdateChatroomDto) {
    return this.chatroomsService.update(+id, updateChatroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatroomsService.remove(+id);
  }
}
