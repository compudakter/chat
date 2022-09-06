import { FC } from "react"
import { MessageData } from "../../../types/message"
import { getBlockClass } from "../../../utils/common"
import { Message } from "../message/Message"
import './ChatList.scss'
interface ChatListProps{
    messages:MessageData[]
    block?:string
}


export const ChatList:FC<ChatListProps> = ({messages,block}) =>{
    const blockClass = getBlockClass('chat-list',block)
    return <div className={`${blockClass} chat-list`}>
        {messages.map(m=><Message block="chat-list" message={m}/>)}
    </div>
}