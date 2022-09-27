import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginPage } from "../component/login/LoginPage";
import { LoginState } from "../types/security";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/LoginPage",
  component: LoginPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const LoginPageImpl = Template.bind({});
LoginPageImpl.args = {
  signIn: (phone: string, password: string) => {
    console.log(phone,password)
  },
  signUp: (data: LoginState) => {
    console.log(data)
  }
};
