import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { PageLayout} from '../component/layout/PageLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PageLayout',
  component: PageLayout, 
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageLayout>;
 
const Template: ComponentStory<typeof PageLayout> = (args) => <PageLayout {...args} />;

export const PageLayoutImpl = Template.bind({});  
PageLayoutImpl.args = {
  name:'John',
  visitDate:new Date(),
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
  ],
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
 