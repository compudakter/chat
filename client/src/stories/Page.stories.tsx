import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageLayout } from "../component/layout/PageLayout";
import { parseContacts } from "../service/contact";
import { DEFAULT_CONTACTS_INFO } from "../models/contacts";
import { ProviderWrapper } from "../testdata/TestStoreWrapper";

const ProvidedPageLayout = () => {
  return (
    <ProviderWrapper>
      <PageLayout
        name="John"
        visitDate={new Date()}
        messages={[
          {
            text: "Тест сообщение Тест сообщение Тест сообщение ",
            owner:1,
            timestamp:1
          },
          {
            text: "Тест сообщение Тест сообщение Тест сообщение ",
            owner:1,
            timestamp:1
          },
          {
            text: "Тест сообщение Тест сообщение Тест сообщение ",
            owner:1,
            timestamp:1
          },
        ]}
      />
    </ProviderWrapper>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PageLayout",
  component: ProvidedPageLayout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProvidedPageLayout>;

const Template: ComponentStory<typeof ProvidedPageLayout> = (args) => (
  <ProvidedPageLayout />
);

export const PageLayoutImpl = Template.bind({});
PageLayoutImpl.args = {};
