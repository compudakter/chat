import { OmitType } from "@nestjs/mapped-types";
import { Chatroom } from "../entities/chatroom.entity";

export class CreateChatroomDto extends OmitType(Chatroom,['id']){}
