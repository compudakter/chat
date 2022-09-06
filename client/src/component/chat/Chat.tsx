import { FC } from "react";
import { MessageData } from "../../types/message";
import { getBlockClass } from "../../utils/common";
import { ChatList } from "./chatlist/ChatList";
import { ChatHeader } from "./header/ChatHeader";
import { MessageInput } from "./messageinput/MessageInput";
import "./Chat.scss";
interface ChatProps {
  messages: MessageData[];
  name: string;
  visitDate: Date;
  block?: string;
  activeRoom?: number;
}

export const Chat: FC<ChatProps> = ({
  messages,
  name,
  visitDate,
  block,
  activeRoom,
}) => {
  const blockClass = getBlockClass("chat", block);

  const renderContent = () => {
    if (!activeRoom) {
      return <div className="chat-empty">Выберите чат</div>;
    }
    return (
      <>
        <ChatHeader block="chat" name={name} visitDate={visitDate} />
        <ChatList block="chat" messages={messages} />
        <MessageInput block="chat" />
      </>
    );
  };
  return <div className={`chat ${blockClass}`}>{renderContent()}</div>;
};
