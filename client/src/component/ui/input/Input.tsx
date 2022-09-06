import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import './Input.scss'

interface InputProps{
    value:string
    block?:string
    onChange:(e:any)=>void
}

export const Input:FC<InputProps> = ({onChange,value,block}) =>{
    const blockClass = getBlockClass('input',block)
    return (
        <input className={`${blockClass} input `} value={value} onChange={onChange}/>
    )
}