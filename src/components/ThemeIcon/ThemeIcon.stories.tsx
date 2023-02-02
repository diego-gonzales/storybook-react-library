import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ThemeIcon } from "./ThemeIcon";
import DocsThemeIcon from "./DocsThemeIcon.mdx";
import { ThemeProvider } from "../../contexts/ThemeContext";
// import { fireEvent, userEvent, within} from '@storybook/testing-library';

export default {
  title: "Components/ThemeIcon",
  component: ThemeIcon,
  parameters: {
    docs: {
      page: DocsThemeIcon
    },
    actions: {
      handles: ["click"]
    }
  }
} as ComponentMeta<typeof ThemeIcon>;

const Template: ComponentStory<typeof ThemeIcon> = () => (
  <ThemeProvider>
    <ThemeIcon />
  </ThemeProvider>
);

export const Default = Template.bind({});

// Esto me sirve como test, esta historia lo que hara es hacer click automáticamente en el botón una vex se renderiza ña historia
// export const ClickExample = Template.bind({});
// ClickExample.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByRole('button'));
// };
