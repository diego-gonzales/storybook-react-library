import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import DocsButton from './DocsButton.mdx';

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: DocsButton
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default" };

export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "Primary" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", children: "Secondary" };
