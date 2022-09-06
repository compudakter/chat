import { FC, useEffect } from "react";
import { BriefContact, ContactData, ContactInfo } from "../../../types/contact";
import { ContactItem } from "../item/ContactItem";

interface ContactListProps {
  userId: number;
  contacts: ContactInfo;
  getContacts: (userId: number) => void;
  activateContact: (id: number) => void;
}

export const ContactList: FC<ContactListProps> = ({
  contacts,
  getContacts,
  userId,
  activateContact,
}) => {
  useEffect(() => {
    if (!contacts.ids.length) {
      getContacts(userId);
    }
  }, []);
  return (
    <div className="contact-list">
      {contacts.ids.map((id) => {
        const contact: ContactData = {
          avatar: contacts.avatars[id],
          id,
          lastDate: contacts.lastDates[id],
          lastMessage: contacts.lastMessages[id],
          name: contacts.names[id],
          newMessagesCount: contacts.newMessagesCounts[id],
          phone: contacts.phones[id],
        };
        return (
          <ContactItem
            onClick={() => activateContact(id)}
            key={`${id}`}
            block="contact-list"
            contact={contact}
          />
        );
      })}
    </div>
  );
};
