import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { SideMenu} from '../component/sidemenu/SideMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SideMenuItem',
  component: SideMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SideMenu>;
 
const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const SideMenuImpl = Template.bind({});  
SideMenuImpl.args = {
    name:'John',
    phone:'+7981-113-52-66'
};
 