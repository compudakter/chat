import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Button} from '../component/ui/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;
 
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonImpl = Template.bind({});  
ButtonImpl.args = {
  children:'+',
  onClick:(e)=>{}
};
 