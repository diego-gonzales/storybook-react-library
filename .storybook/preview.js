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
  // layout: "centered",
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...CUSTOM_VIEWPORTS
    }
  }
}

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'fr', right: '🇫🇷', title: 'Français' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'zh', right: '🇨🇳', title: '中文' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ],
//     },
//   },
// };