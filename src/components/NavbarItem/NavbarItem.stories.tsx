import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NavbarItem from "./NavbarItem";

export default {
  title: "Components/NavbarItem",
  component: NavbarItem
} as ComponentMeta<typeof NavbarItem>;

const Template: ComponentStory<typeof NavbarItem> = (args) => (
  <NavbarItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Item1"
};
