import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { CUSTOM_VIEWPORTS } from '../utils/viewports';
import '../src/css/variables.css';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...CUSTOM_VIEWPORTS
    }
  }
}
