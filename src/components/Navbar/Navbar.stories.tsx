import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { Navbar } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc:
    "https://static.overlay-tech.com/assets/f11dfcc7-75cf-45bf-96d1-233849a91b36.svg",
  title: "TIX",
  children: [<NavbarItem key={1}>Item 1</NavbarItem>, <NavbarItem key={2}>Item 2</NavbarItem>]
};
