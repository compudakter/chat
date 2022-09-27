import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chat } from '../component/chat/Chat';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Chat',
  component: Chat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const ChatItem = Template.bind({});
ChatItem.args = {
  name: 'John',
  visitDate: new Date(),
  messages: [
    {
      text: "Тест сообщение Тест сообщение Тест сообщение ",
      owner: 1,
      timestamp: 1
    },
    {
      text: "Тест сообщение Тест сообщение Тест сообщение ",
      owner: 1,
      timestamp: 1
    },
    {
      text: "Тест сообщение Тест сообщение Тест сообщение ",
      owner: 1,
      timestamp: 1
    }
  ]
};
