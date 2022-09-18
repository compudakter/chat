import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import sinon from 'sinon';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

class UserServiceMock {
  async create(createUserDto: CreateUserDto) {
    const user: User = createUserDto as User
    user.id = 1
    return Promise.resolve(user)
  }

  async findAll() {
    return Promise.resolve([])
  }

  async findOne(id: number) {
    return Promise.resolve({})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return Promise.resolve({})
  }

  async remove(id: number) {
    return Promise.resolve(true)
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const ServiceProvider = {
      provide: UsersService,
      useClass: UserServiceMock
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, ServiceProvider],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should call create method', async () => {
    const user: CreateUserDto = { firstName: 'abc', lastName: 'last', login: 'log', password: 'pass' }
    const createdUser: User = await service.create(user)
    expect(createdUser).not.toBe(null)
    expect(createdUser.id).toBe(1)
    expect(createdUser.firstName).toBe('abc')
  });
});


describe('UserService with mocked repository', () => {
  let service: UsersService;
  let sandbox: sinon.SinonSandbox;
  beforeAll(async () => {
    sandbox = sinon.createSandbox()
    const module: TestingModule = await Test.createTestingModule(
      {
        providers: [
          UsersService,
          {
            provide: getRepositoryToken(User),
            useValue: sinon.createStubInstance(Repository)
          }
        ]
      }
    ).compile()
    service = module.get<UsersService>(UsersService)
  })
})