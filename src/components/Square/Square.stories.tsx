import React from "react";
import { Square } from "./Square";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Square",
  component: Square
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded',
  shape: 'rounded'
};

export const Circle = Template.bind({});
Circle.args = {
  children: 'Circle',
  shape: 'circle'
};