import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { ContactSidebar} from '../component/contact/sidebar/ContactSidebar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ContactSidebar',
  component: ContactSidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ContactSidebar>;
 
const Template: ComponentStory<typeof ContactSidebar> = (args) => <ContactSidebar {...args} />;

export const ContactSidebarImpl = Template.bind({});  
ContactSidebarImpl.args = {
    contacts:[
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
 