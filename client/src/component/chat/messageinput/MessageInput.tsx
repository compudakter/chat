import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import { Button } from "../../ui/button/Button"
import { TextArea } from "../../ui/textarea/TextArea"
import './MessageInput.scss'
interface MessageInputProps{
    block?:string
}
export const MessageInput:FC<MessageInputProps> = ({block}) =>{
    const blockClass = getBlockClass('message-input',block)
    return <div className={`${blockClass} message-input`}>
        <Button block="message-input" onClick={()=>{}}>()</Button>
        <TextArea value="Сообщение" onChange={()=>{}} block="message-input"/>
        <Button block="message-input"  onClick={()=>{}}>={'>'}</Button>
    </div>
}