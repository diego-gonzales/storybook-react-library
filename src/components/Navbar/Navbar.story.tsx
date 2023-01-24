import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Navbar from "./Navbar";
// import { Default } from "../NavbarItem/NavbarItem.stories";
import NavbarItem from "../NavbarItem/NavbarItem";

export default {
  title: "Components/Navbar",
  component: Navbar,
  subcomponents: { NavbarItem }
} as ComponentMeta<typeof Navbar>;

// const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

// export const OneItem = Template.bind({});
// OneItem.args = {
//   imgSrc:
//     "https://static.overlay-tech.com/assets/f11dfcc7-75cf-45bf-96d1-233849a91b36.svg",
//   children: <NavbarItem>Item1</NavbarItem>
// };

export const OneItem: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarItem>Item1</NavbarItem>
    <NavbarItem>Item2</NavbarItem>
    <NavbarItem>Item3</NavbarItem>
  </Navbar>
);
