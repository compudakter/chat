import { FC } from "react"
import { getBlockClass } from "../../../utils/common";
import './Avatar.scss';

type AvatarSize = 'sm'|'lg'

interface AvatarProps{
    image:string
    block?:string
    size?:AvatarSize
}

export const Avatar:FC<AvatarProps> = ({image,block,size}) =>{
    const blockClass = getBlockClass('avatar',block)
    const sizeClass = size ? `avatar_${size}`:''
    return (
        <div className={`${blockClass} avatar ${sizeClass}`}>
            <img src={image} alt="" />
        </div>
    )
}