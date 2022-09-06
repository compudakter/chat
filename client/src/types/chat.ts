import { MessageData } from "./message";

export interface Member {
  id: number;
  name: string;
  lastVisited: Date;
}

export interface ChatState {
  activeRoom?: number;
  members: Member[];
  messages?: MessageData[];
}
