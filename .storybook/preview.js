import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { CUSTOM_VIEWPORTS } from '../utils/viewports';
import '../src/css/variables.css';
import '../src/index.css';
import { ThemeProvider } from '../src/contexts/ThemeContext'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: "centered",
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...CUSTOM_VIEWPORTS
    }
  }
}

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       items: ['light', 'dark'],
//       dynamicTitle: true,
//     },
//   },
// };

const withThemeProvider = (Story, context) => {
  // const theme = context.globals.theme;
  // console.log(theme);
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];