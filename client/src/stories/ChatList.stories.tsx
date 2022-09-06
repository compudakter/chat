import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { ChatList} from '../component/chat/chatlist/ChatList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ChatList',
  component: ChatList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChatList>;
 
const Template: ComponentStory<typeof ChatList> = (args) => <ChatList {...args} />;

export const ChatListItem = Template.bind({});  
ChatListItem.args = {
  messages:[
    {
      text:"Тест сообщение Тест сообщение Тест сообщение "
    },
    {
      text:"Тест сообщение Тест сообщение Тест сообщение "
    },
    {
      text:"Тест сообщение Тест сообщение Тест сообщение "
    }
  ]
};
 