import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOptionsWhere, Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  async create(createUserDto: CreateUserDto) { 
    const savedUser = await this.userRepository.save(createUserDto)
    return savedUser
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where:{id} });
  }
  async searchUsers(search:string){
    const searchResult =  await this.userRepository.find({
      where:[
        {phone:Like(`%${search}%`)},
        {name:Like(`%${search}%`)}
      ]
    })
    return searchResult
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const {name,password} = updateUserDto
    const user = new User()
    user.name = name
    user.password = password
    const savedUser = await this.userRepository.save(user)
    return savedUser
  }

  async remove(id: number) { 
    const result:DeleteResult = await this.userRepository.delete({id})
    return result
  }
}
