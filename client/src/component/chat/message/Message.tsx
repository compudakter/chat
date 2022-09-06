import { FC } from "react"
import { MessageData } from "../../../types/message"
import { getBlockClass } from "../../../utils/common"
import { Avatar } from "../../ui/avatar/Avatar"
import './Message.scss'
interface MessageProps{
    message:MessageData 
    block?:string
}

export const Message:FC<MessageProps> = ({message,block}) =>{
    const blockClass = getBlockClass('message',block)
    return <div className={`${blockClass} message`}>
        <Avatar image="" size="sm" block="message" /> 
        <MessageContent message={message.text}/>
        <div className="message__additions"></div>
    </div>
}

interface MessageContentProps{
    message:string
}
const MessageContent:FC<MessageContentProps> = ({message}) =>{
    return <div className="message__content">
        {message}
    </div>
}