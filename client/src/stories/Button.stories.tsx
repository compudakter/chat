import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RoundButton } from "../component/ui/roundbutton/RoundButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RoundButton",
  component: RoundButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const ButtonImpl = Template.bind({});
ButtonImpl.args = {
  children: "+",
  onClick: (e) => {},
};
