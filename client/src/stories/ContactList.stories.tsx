import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactList } from '../component/contact/list/ContactList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ContactList',
  component: ContactList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ContactList>;

const Template: ComponentStory<typeof ContactList> = (args) => <ContactList {...args} />;

export const ContactListImpl = Template.bind({});
ContactListImpl.args = {
  contacts: [
    {
      avatar: '',
      lastDate: new Date(),
      lastMessage: 'Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение',
      name: 'John',
      newMessagesCount: 2,
    },
    {
      avatar: '',
      lastDate: new Date(),
      lastMessage: 'Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение',
      name: 'John',
      newMessagesCount: 2,
    },
    {
      avatar: '',
      lastDate: new Date(),
      lastMessage: 'Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение',
      name: 'John',
      newMessagesCount: 2,
    }
  ]
};
