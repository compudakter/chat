import { FC } from "react"
import { Avatar } from "../ui/avatar/Avatar"

interface InformationProps{
    name:string
    visited:Date
}

export const Information:FC<InformationProps> = () =>{
    return <div className="information">
        <div className="information__header">
            <Avatar image={""}  />
            <div className="information__contact">
                <div className="information__contact-name"></div>
                <div className="information__contact-visited"></div>
            </div>
        </div>
        <div className="information__category">

        </div>
        <div className="information__category">

        </div>
        <div className="information__category">

        </div>
    </div>
}