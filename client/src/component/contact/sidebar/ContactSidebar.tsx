import { FC } from "react";
import { connect } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { BriefContact, ContactData, ContactInfo } from "../../../types/contact";
import { RoundButton } from "../../ui/roundbutton/RoundButton";
import { Input } from "../../ui/input/Input";
import { ContactList } from "../list/ContactList";
import "./ContactSidebar.scss";

const ConnectedContactList = connect(
  (state: RootState) => {
    return {
      userId: 1,
      contacts: state.contacts.info,
    };
  },
  (dispatch: Dispatch) => {
    return {
      getContacts: (userId: number) => dispatch.contacts.getContacts(userId),
      activateContact: (id: number) => dispatch.chat.sendActiveRoom(id),
    };
  }
)(ContactList);

interface ContactSidebarProps {
  openMenu: () => void;
}

export const ContactSidebar: FC<ContactSidebarProps> = ({ openMenu }) => {
  return (
    <div className="contact-sidebar">
      <div className="contact-sidebar__header">
        <div className="contact-sidebar__menu-btn">
          <RoundButton block="contact-sidebar" onClick={openMenu}>
            =
          </RoundButton>
        </div>
        {/* <div className="contact-sidebar__search"> */}
        <Input block="contact-sidebar" value="Поиск" onChange={() => {}} />
        {/* </div> */}
      </div>
      <ConnectedContactList />
    </div>
  );
};
