import { Chatroom } from "../../chatrooms/entities/chatroom.entity";
import { Message } from "../../messages/entities/message.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

 

@Entity()
export class User    {
     
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    link?:string

    @Column()
    phone:string
    
    @Column()
    email:string

    @Column()
    password:string

    @Column()
    name:string

    @ManyToMany(()=>Chatroom,(chatRoom:Chatroom)=>chatRoom.members)
    @JoinTable()
    rooms?:Chatroom[]    

    @OneToMany(()=>Message,(message:Message)=>message.user)
    messages:Message[]
}
