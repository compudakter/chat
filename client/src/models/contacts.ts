import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { parseContacts } from "../service/contact";
import { ContactsState, ContactData } from "../types/contact";

export const DEFAULT_CONTACTS_INFO = {
  ids: [],
  names: {},
  phones: {},
  avatars: {},
  newMessagesCounts: {},
  lastDates: {},
  lastMessages: {},
};

const DEFAULT_CONTACTS_STATE: ContactsState = {
  info: DEFAULT_CONTACTS_INFO,
};

export const contacts = createModel<RootModel>()({
  state: DEFAULT_CONTACTS_STATE,
  reducers: {
    sendContacts(state, contactList: ContactData[]) {
      const contactInfo = parseContacts(contactList);
      const newState = { ...state, info: contactInfo };
      return newState;
    },
  },
  effects: (dispatch) => ({
    getContacts(userId: number, state) {
      if (state.contacts.info.ids.length) {
        return;
      }
      this.sendContacts([]);
    },
  }),
});
