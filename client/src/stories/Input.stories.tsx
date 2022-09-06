import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Input} from '../component/ui/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;
 
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputImpl = Template.bind({});  
InputImpl.args = {
  value:"Поиск",
  onChange:(e)=>{}
};
 