import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Message} from '../component/chat/message/Message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Message>;
 
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const MessageImpl = Template.bind({});  
MessageImpl.args = {
  message:{text:`
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  ТЕст сообщение
  `,
  owner:1,
            timestamp:1
}
};
 