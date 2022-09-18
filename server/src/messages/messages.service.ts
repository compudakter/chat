import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private messageRepository:Repository<Message>){}
  async create(createMessageDto: CreateMessageDto) {
    return await this.messageRepository.save(createMessageDto)
  }

  async findAll() {
    return await this.messageRepository.find()
  }

  async findOne(id: number) {
    return await this.messageRepository.find()
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messageRepository.findOne({where:{id}})
    message.text = updateMessageDto.text
    return await this.messageRepository.save(message)
  }

  remove(id: number) {
    return this.messageRepository.delete(id)
  }
}
