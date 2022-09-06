import { FC } from "react"
import { getBlockClass } from "../../../utils/common"
import './TextArea.scss'
interface TextAreaProps{
    value:string
    block?:string
    onChange:(e:any)=>void
}

export const TextArea:FC<TextAreaProps> = ({value,onChange,block}) =>{
    const blockClass = getBlockClass('textarea',block)
    return <textarea className={`${blockClass} textarea`}  value={value} onChange={onChange}  ></textarea>
}