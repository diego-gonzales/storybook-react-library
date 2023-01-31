import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeIcon } from './ThemeIcon';
import DocsThemeIcon from './DocsThemeIcon.mdx'

export default {
  title: "Components/ThemeIcon",
  component: ThemeIcon,
  parameters: {
    docs: {
      page: DocsThemeIcon
    }
  }
} as ComponentMeta<typeof ThemeIcon>;

export const Default = <ThemeIcon />;