import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Avatar} from '../component/ui/avatar/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;
 
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarItem = Template.bind({});  
AvatarItem.args = {

};
 
export const AvatarSmallItem = Template.bind({});  
AvatarSmallItem.args = {
  size:'sm'
};