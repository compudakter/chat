import { FC } from "react"
import { BriefContact } from "../../../types/contact"
import { Button } from "../../ui/button/Button"
import { Input } from "../../ui/input/Input"
import { ContactList } from "../list/ContactList"
import './ContactSidebar.scss'
interface ContactSidebarProps{
    contacts:BriefContact[]
    openMenu:()=>void
}

export const ContactSidebar:FC<ContactSidebarProps> = ({contacts,openMenu}) =>{

    return (
        <div className="contact-sidebar">
            <div className="contact-sidebar__header">
                <div className="contact-sidebar__menu-btn">
                    <Button block="contact-sidebar" onClick={openMenu}>
                        =
                    </Button>
                </div>
                {/* <div className="contact-sidebar__search"> */}
                    <Input block="contact-sidebar" value="Поиск" onChange={()=>{}}/>
                {/* </div> */}
            </div>
            <ContactList contacts={contacts}/>
        </div>
    )
}