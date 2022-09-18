import { Chatroom } from "../../chatrooms/entities/chatroom.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    text:string    
    @Column()
    timestamp:number
    @ManyToOne(()=>User,(user:User)=>user.messages)
    user:User
    @ManyToOne(()=>Chatroom,(chr:Chatroom)=>chr.messages)
    chatRoom:Chatroom
}
