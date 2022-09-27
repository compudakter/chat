 
import { OmitType, PickType } from "@nestjs/mapped-types";
import { Token } from "../entities/token.entity";

export class CreateTokenDto extends PickType(Token,['id']){}
