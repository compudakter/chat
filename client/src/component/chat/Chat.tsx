import { FC } from "react"
import { MessageData } from "../../types/message"
import { getBlockClass } from "../../utils/common"
import { ChatList } from "./chatlist/ChatList"
import { ChatHeader } from "./header/ChatHeader"
import { MessageInput } from "./messageinput/MessageInput"
import './Chat.scss'
interface ChatProps{
    messages:MessageData[]
    name:string
    visitDate:Date
    block?:string
}

export const Chat:FC<ChatProps> = ({messages,name,visitDate,block}) => {
    const blockClass = getBlockClass('chat',block)
    return <div className={`chat ${blockClass}`}>
        <ChatHeader block="chat" name={name} visitDate={visitDate}/>
        <ChatList block="chat" messages={messages} />
        <MessageInput block="chat"  />
    </div>
}