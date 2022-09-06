import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { ChatHeader} from '../component/chat/header/ChatHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ChatHeaderAvatar',
  component: ChatHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChatHeader>;
 
const Template: ComponentStory<typeof ChatHeader> = (args) => <ChatHeader {...args} />;

export const ChatHeaderItem = Template.bind({});  
ChatHeaderItem.args = {
  name:'John',
  visitDate:new Date()
};
 