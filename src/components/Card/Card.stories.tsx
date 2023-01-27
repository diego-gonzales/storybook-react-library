import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({});
Default.args = {
  imgSrc:
    "https://static.overlay-tech.com/assets/ebef6707-1b9a-4b2b-902b-5495631db30c.png",
  title: "Superman",
  description:
    "Es un superheroe ficticio que aparecio por primera vez en los comics estadounidenses publicados por DC Comics.",
  children: <Button type="secondary">Hello</Button>
};
