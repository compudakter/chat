import { FC, useEffect, useRef, useState } from "react";
import { BriefContact, ContactData } from "../../../types/contact";
import { getBlockClass } from "../../../utils/common";
import { Avatar } from "../../ui/avatar/Avatar";
import { Badge } from "../../ui/badge/Badge";
import "./ContactItem.scss";
interface ContactItemProps {
  contact: ContactData;
  block?: string;
  onClick?: () => void;
}
export const ContactItem: FC<ContactItemProps> = ({
  contact,
  block,
  onClick,
}) => {
  const { avatar, lastDate, lastMessage, name, newMessagesCount } = contact;
  const renderBadge = () => {
    if (!newMessagesCount) {
      return null;
    }
    return <Badge block={"contact-item"} content={`${newMessagesCount}`} />;
  };
  const blockClass = getBlockClass("contact-item", block);
  const onItemClickHandler = () => {
    onClick && onClick();
  };
  return (
    <div onClick={onItemClickHandler} className={`${blockClass} contact-item`}>
      <Avatar block="contact-item" image={avatar} />
      <div className="contact-item__content">
        <div className="contact-item__header">
          <div className="contact-item__name">{name}</div>
          <div className="contact-item__last-date">
            {lastDate.toDateString()}
          </div>
        </div>
        <div className="contact-item__footer">
          <div className="contact-item__last-message">
            <span>{lastMessage}</span>
          </div>
          {renderBadge()}
        </div>
      </div>
    </div>
  );
};
