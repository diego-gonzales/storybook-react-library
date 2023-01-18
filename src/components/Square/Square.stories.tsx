import React from "react";
import { Square } from "./Square";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Square",
  component: Square
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Light = Template.bind({});
Light.args = {
  isLight: true
};

export const Dark = Template.bind({});
Dark.args = {
  isLight: false
};
