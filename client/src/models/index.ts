import { Models } from "@rematch/core";
import { chat } from "./chat/chat";
import { contacts } from "./contacts";

export interface RootModel extends Models<RootModel> {
  contacts: typeof contacts;
  chat: typeof chat;
}

export const models: RootModel = { contacts, chat };
