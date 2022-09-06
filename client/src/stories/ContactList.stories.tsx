import React, { FC, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactList } from "../component/contact/list/ContactList";
import { connect, Provider } from "react-redux";
import { Dispatch, RootState, store } from "../store";
import { ContactData, ContactInfo } from "../types/contact";
import { storiesOf, forceReRender } from "@storybook/react";
import { contactDataTest } from "../testdata/contact";
import {
  ConnectedDefaultStateWrapper,
  ProviderWrapper,
} from "../testdata/TestStoreWrapper";

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

const ProvidedContactList = () => {
  return (
    <ProviderWrapper>
      <ConnectedContactList />
    </ProviderWrapper>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ContactList",
  component: ContactList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProvidedContactList>;

const Template: ComponentStory<typeof ProvidedContactList> = (args) => (
  <ProvidedContactList />
);

export const ContactListImpl = Template.bind({});
ContactListImpl.args = {};
