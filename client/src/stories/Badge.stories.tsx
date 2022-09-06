import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Badge } from '../component/ui/badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>;
 
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeItem = Template.bind({});  
BadgeItem.args = {
   content:'1'
};
 