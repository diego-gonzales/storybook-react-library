import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "Primary" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", children: "Secondary" };
