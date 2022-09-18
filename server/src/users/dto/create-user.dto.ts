import { User } from "../entities/user.entity";
import { PartialType,OmitType } from '@nestjs/mapped-types';
export class CreateUserDto extends OmitType(User,['id','messages']){
    
}
