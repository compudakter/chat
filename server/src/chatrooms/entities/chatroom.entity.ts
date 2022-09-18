import { Message } from "../../messages/entities/message.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chatroom {
    @PrimaryGeneratedColumn()
    id:number 
    
    @ManyToMany(()=>User,(user:User)=>user.rooms)
    members:User[]

    @OneToMany(()=>Message,(m:Message)=>m.chatRoom)
    messages?:Message[]
}
