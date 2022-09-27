import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import { RoundButton } from "../../ui/roundbutton/RoundButton"
import { TextArea } from "../../ui/textarea/TextArea"
import './MessageInput.scss'
interface MessageInputProps{
    block?:string
}
export const MessageInput:FC<MessageInputProps> = ({block}) =>{
    const blockClass = getBlockClass('message-input',block)
    return <div className={`${blockClass} message-input`}>
        <RoundButton block="message-input" onClick={()=>{}}>()</RoundButton>
        <TextArea value="Сообщение" onChange={()=>{}} block="message-input"/>
        <RoundButton block="message-input"  onClick={()=>{}}>={'>'}</RoundButton>
    </div>
}