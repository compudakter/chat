import { FC } from "react"
import { BriefContact } from "../../../types/contact"
import { ContactItem } from "../item/ContactItem"

interface ContactListProps{
    contacts:BriefContact[]
}

export const ContactList:FC<ContactListProps> = ({contacts}) =>{

    return <div className="contact-list">
        {contacts.map(c=><ContactItem block="contact-list" contact={c} />)}
    </div>
}