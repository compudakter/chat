import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';  
import { Repository } from 'typeorm';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';
import * as jwt from "jsonwebtoken";
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { TokenDataDTO } from './dto/token-data.dto';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private userService:UsersService,
    @InjectRepository(Token) private tokenRepository:Repository<Token>     
  ){

  }
  getAccessSecret(){
    return this.configService.get<string>("JWT_ACCESS_TOKEN_SECRET")
  }
  getRefreshSecret(){
    return this.configService.get<string>("JWT_REFRESH_TOKEN_SECRET")
  }
  generateTokens(user:TokenDataDTO) {
      const refreshToken = jwt.sign(this.getRefreshSecret())
      const accessToken = jwt.sign(user,this.getRefreshSecret())
      return {
        refreshToken,
        accessToken
      }
  }
  async saveRefreshToken(userId:number,refreshToken){
    let token = await this.tokenRepository.findOne({where:{refreshToken}})
    if(token){
      token.refreshToken = refreshToken
      return this.tokenRepository.save(token)
    }
    let user = await this.userService.findOne(userId)
    token = {
      refreshToken,
      user
    }
    return await this.tokenRepository.save(token)
  }
  async findByRefreshToken(refreshToken){
    return await this.tokenRepository.findOne({where:{refreshToken}})
  }
  async validateRefreshToken(refreshToken:string){
    try{
      const userData = await jwt.verify(refreshToken,this.getRefreshSecret())
      return userData
    }catch(e){
      return null
    }
  }
  async validateAccessToken(accessToken:string){
    try{
      const userData = await jwt.verify(accessToken,this.getRefreshSecret())
      return userData
    }catch(e){
      return null
    }
  }
  findAll() {
    return `This action returns all token`;
  }

  findOne(id: number) {
    return this.tokenRepository.findOne({where:{id}}) 
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
