import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Token } from './entities/token.entity';

@Module({  
  imports:[TypeOrmModule.forFeature([Token,User]),ConfigModule,UsersModule],
  controllers: [TokenController],
  providers: [UsersService,TokenService,ConfigService]
})
export class TokenModule {}
