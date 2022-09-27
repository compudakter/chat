import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegistrationDTO } from './dto/registration.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
 async  registration(@Res({ passthrough: true }) response: Response,@Body() data:RegistrationDTO ){
   const tokenData =   await this.authService.registration(data)
    const {accessToken, refreshToken,user} = tokenData
    response.cookie("refreshToken",refreshToken,{httpOnly:true, maxAge: 30 * 24 * 3600 * 1000})
    return response.json({accessToken, refreshToken,user})
  }
  @Get('/refresh')
  async refresh(@Req() request:Request,@Res({ passthrough: true }) response: Response){
    const {refreshToken} = request.cookies()
    const user = await this.authService.refresh(refreshToken)
  }
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
