import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Token } from '../token/entities/token.entity';
import { User } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
      const module:TestingModule = await Test.createTestingModule({
        imports:[
          ConfigModule,
          TypeOrmModule.forRoot({
          type:'sqlite',
          database:":memory",
          dropSchema:true,
          entities:[User,Token],
          synchronize:true,
          logging:false
          }),
          TypeOrmModule.forFeature([User,Token])
        ],
        controllers:[
          AuthController
        ],
        providers:[
          AuthService,
          ConfigService,
          UsersService
        ]
      }).compile()
      controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
