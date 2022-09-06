import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import './Button.scss'

interface ButtonProps{
    children?:any,
    block?:string
    onClick:(e:any)=>void
}

export const Button:FC<ButtonProps> = ({children,block,onClick}) =>{
    const blockClass = getBlockClass('btn',block)
    return (
        <div className={`${blockClass} btn`} onClick={onClick}>
            {children}
        </div>
    )
}