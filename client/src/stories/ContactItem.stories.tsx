import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactItem } from "../component/contact/item/ContactItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ContactItem",
  component: ContactItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ContactItem>;

const Template: ComponentStory<typeof ContactItem> = (args) => (
  <ContactItem {...args} />
);

export const ContactItemImpl = Template.bind({});
ContactItemImpl.args = {
  contact: {
    id: 1,
    phone: "232424",
    avatar: "",
    lastDate: new Date(),
    lastMessage:
      "Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение",
    name: "John12",
    newMessagesCount: 2,
  },
};

export const ContactNoNewImpl = Template.bind({});
ContactNoNewImpl.args = {
  contact: {
    id: 2,
    phone: "232424",
    avatar: "",
    lastDate: new Date(),
    lastMessage:
      "Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение",
    name: "John12",
  },
};
