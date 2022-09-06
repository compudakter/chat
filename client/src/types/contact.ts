export interface BriefContact {
  avatar: string;
  name: string;
  lastMessage: string;
  lastDate: Date;
  newMessagesCount?: number;
}

export interface ContactInfo {
  ids: number[];
  names: { [id: number]: string };
  phones: { [id: number]: string };
  avatars: { [id: number]: string };
  lastMessages: { [id: number]: string };
  lastDates: { [id: number]: Date };
  newMessagesCounts: { [id: number]: number };
}

export interface ContactsState {
  info: ContactInfo;
}
export interface ContactData {
  id: number;
  name: string;
  phone: string;
  avatar: string;
  lastMessage: string;
  lastDate: Date;
  newMessagesCount?: number;
}
