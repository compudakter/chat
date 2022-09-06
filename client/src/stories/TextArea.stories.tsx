import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { TextArea} from '../component/ui/textarea/TextArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextArea>;
 
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextAreaItem = Template.bind({});  
TextAreaItem.args = {

};
 