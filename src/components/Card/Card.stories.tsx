import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card as CardComponent } from './Card';
import { Button } from "../Button/Button";

export default {
  title: "Components/Card",
  component: CardComponent,
  argTypes: {
    children: {
      control: false,
      // table: {
      //   disable: true,
      // }
    }
  }
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const Card = Template.bind({});
Card.args = {
  imgSrc:
    "https://static.overlay-tech.com/assets/ebef6707-1b9a-4b2b-902b-5495631db30c.png",
  title: "Superman",
  description:
    "Es un superheroe ficticio que aparecio por primera vez en los comics estadounidenses publicados por DC Comics.",
  children: <Button type="secondary">Hello</Button>
};


// export const StoryWithLocale = (args: any, { globals }: any) => {
//   const localeActual = globals;
//   console.log(localeActual);
//   return <>{'je'}</>;
// };

// Dealing with complex values: https://storybook.js.org/docs/react/essentials/controls
/*
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    propertyA: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    propertyB: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Card>;

const someFunction = (valuePropertyA: any, valuePropertyB: any) => {
  return <Button type={valuePropertyA}>{valuePropertyB}</Button>
};

const Template: ComponentStory<typeof Card> = ({ propertyA, propertyB, ...rest }) => {
  const someFunctionResult = someFunction(propertyA, propertyB);
  return <Card {...rest}>{someFunctionResult}</Card>
}

export const Default = Template.bind({});
Default.args = {
  imgSrc:
    "https://static.overlay-tech.com/assets/ebef6707-1b9a-4b2b-902b-5495631db30c.png",
  title: "Superman",
  description:
    "Es un superheroe ficticio que aparecio por primera vez en los comics estadounidenses publicados por DC Comics.",
  propertyA: 'primary',
  propertyB: 'Hello again!!!'
};
*/