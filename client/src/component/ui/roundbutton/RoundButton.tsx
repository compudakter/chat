import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import './RoundButton.scss'

interface ButtonProps{
    children?:any,
    block?:string
    onClick?:(e:any)=>void
}

export const RoundButton:FC<ButtonProps> = ({children,block,onClick}) =>{
    const blockClass = getBlockClass('btn-round',block)
    return (
        <div className={`${blockClass} btn-round`} onClick={onClick}>
            {children}
        </div>
    )
}