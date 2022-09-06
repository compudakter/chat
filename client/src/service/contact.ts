import { DEFAULT_CONTACTS_INFO } from "../models/contacts";
import { ContactData, ContactInfo } from "../types/contact";

export const parseContacts = (contactList: ContactData[]) => {
  const contactInfo: ContactInfo = DEFAULT_CONTACTS_INFO;
  if (!contactList) {
    return contactInfo;
  }
  console.log("contactInfo=======", contactInfo);
  contactList.forEach((cl) => {
    const { id, name, phone, avatar, lastDate, lastMessage, newMessagesCount } =
      cl;
    contactInfo.ids.push(id);
    contactInfo.names[id] = name;
    contactInfo.phones[id] = phone;
    contactInfo.avatars[id] = avatar;
    contactInfo.lastDates[id] = lastDate;
    contactInfo.lastMessages[id] = lastMessage;
    contactInfo.newMessagesCounts[id] = newMessagesCount || 0;
  });
  return contactInfo;
};
