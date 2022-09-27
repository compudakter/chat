import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import { RoundButton } from "../../ui/roundbutton/RoundButton"
import './ChatHeader.scss'
interface ChatHeaderProps{
    name:string
    visitDate:Date
    block?:string
}

export const ChatHeader:FC<ChatHeaderProps> = ({name,visitDate,block}) =>{
    const blockClass = getBlockClass("chat-header",block)
    return <div className="chat-header">
        <div className="chat-header__contact">
            <div className="chat-header__name">{name}</div>
            <div className="chat-header__visit-date">был(а) {visitDate.getMinutes()} минуты назад</div>
        </div>
        <div className="chat-header__controls">
            <RoundButton onClick={()=>{}} block="chat-header">+</RoundButton>
            <RoundButton onClick={()=>{}} block="chat-header">-</RoundButton>
            <RoundButton onClick={()=>{}} block="chat-header">*</RoundButton>
            <RoundButton onClick={()=>{}} block="chat-header">.</RoundButton>
        </div>
    </div>
}