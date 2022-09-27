import { FC } from "react"
import './Button.scss'

type ButtonVariant = 'primary' | 'success' | 'danger'
interface ButtonProps{
    variant?:ButtonVariant
    children?:any
    onClick?:(e:any)=>void
}

export const Button:FC<ButtonProps> = ({variant,children,onClick}) =>{
    const bVariant = `btn_${variant || 'primary'}` 
    return <button className={`btn ${bVariant}`} onClick={onClick}>
        {children}
    </button>
}