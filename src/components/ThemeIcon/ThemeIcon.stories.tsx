import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeIcon as ThemeIconComponent } from "./ThemeIcon";
import DocsThemeIcon from "./DocsThemeIcon.mdx";
import { ThemeProvider } from "../../contexts/ThemeContext";
// import { fireEvent, userEvent, within} from '@storybook/testing-library';

export default {
  title: "Components/ThemeIcon",
  component: ThemeIconComponent,
  parameters: {
    docs: {
      page: DocsThemeIcon
    },
    actions: {
      handles: ["click"]
    }
  },
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider>
  //       <Story />
  //     </ThemeProvider>
  //   )
  // ]
} as ComponentMeta<typeof ThemeIconComponent>;


const Template: ComponentStory<typeof ThemeIconComponent> = () => <ThemeIconComponent />;

export const ThemeIcon = Template.bind({});
ThemeIcon.parameters = {
  docs: {
    source: {
      code: '<ThemeIcon />',
      language: "jsx",
      type: "auto"
    }
  }
};

// Esto me sirve como test, esta historia lo que hara es hacer click automáticamente en el botón una vez se renderiza ña historia
// export const ClickExample = Template.bind({});
// ClickExample.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByRole('button'));
// };
