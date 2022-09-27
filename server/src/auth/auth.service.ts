import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegistrationDTO } from './dto/registration.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt'
import { User } from '../users/entities/user.entity';
import { TokenService } from '../token/token.service';
import { TokenDataDTO } from '../token/dto/token-data.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private tokenService: TokenService
  ) { }
  async registration(data: RegistrationDTO) {
    const userExists = await this.userService.findByEmail(data.email)
    if (userExists) {
      throw "User exists"
    }
    const { password, ...other } = userExists
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user: User = {
      ...other,
      password: hash
    }
    const saveUser = await this.userService.create(user)
    const userDto: TokenDataDTO = {
      id: saveUser.id
    }
    const { accessToken, refreshToken } = await this.tokenService.generateTokens(userDto)
    this.tokenService.saveRefreshToken(userDto.id, refreshToken)
    return { accessToken, refreshToken, user: userDto }
  }
  async refresh(refreshToken:string) {
    if(!refreshToken){
      throw 'Not authorized'
    }
    const token = await this.tokenService.findByRefreshToken(refreshToken) 
    const user = await this.tokenService.validateRefreshToken(refreshToken)
    if(!user || !token){
      throw 'not authorized'
    }
    const userFromDb = await this.tokenService.findOne(user.id)
    const userDto: TokenDataDTO = {
      id: userFromDb.id
    }
    const tokenData = await this.tokenService.generateTokens(userDto)
    
    this.tokenService.saveRefreshToken(userDto.id,tokenData.refreshToken)
    return {
      user:userDto,
      accessToken:tokenData.accessToken,
      refreshToken:tokenData.refreshToken
    }
  } 
   
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
