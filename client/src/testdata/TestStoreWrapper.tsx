import React, { FC, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactList } from "../component/contact/list/ContactList";
import { connect, Provider } from "react-redux";
import { Dispatch, RootState, store } from "../store";
import { ContactData, ContactInfo } from "../types/contact";
import { storiesOf, forceReRender } from "@storybook/react";
import { contactDataTest } from "../testdata/contact";

interface DefaultStateWrapperProps {
  contacts: ContactInfo;
  sendContacts: (contactData: ContactData[]) => void;
  children: any;
}
const DefaultStateWrapper: FC<DefaultStateWrapperProps> = ({
  sendContacts,
  contacts,
  children,
}) => {
  useEffect(() => {
    if (!contacts.ids.length) {
      sendContacts(contactDataTest);
      forceReRender();
    }
  }, []);
  return children;
};

export const ConnectedDefaultStateWrapper = connect(
  (state: RootState) => {
    return {
      contacts: state.contacts.info,
    };
  },
  (dispatch: Dispatch) => {
    return {
      sendContacts: (contactData: ContactData[]) =>
        dispatch.contacts.sendContacts(contactData),
    };
  }
)(DefaultStateWrapper);

interface ProviderWrapperProps {
  children: any;
}

export const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ConnectedDefaultStateWrapper>{children}</ConnectedDefaultStateWrapper>
    </Provider>
  );
};
