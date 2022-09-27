import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    refreshToken:string

    @OneToOne(()=>User)
    @JoinColumn()
    user:User
}
 
 

