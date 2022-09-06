import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { MessageInput} from '../component/chat/messageinput/MessageInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MessageInput',
  component: MessageInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MessageInput>;
 
const Template: ComponentStory<typeof MessageInput> = (args) => <MessageInput {...args} />;

export const MessageInputItem = Template.bind({});  
MessageInputItem.args = {
  
};
 