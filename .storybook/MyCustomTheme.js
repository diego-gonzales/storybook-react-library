import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'black',
  colorSecondary: 'black',

  // UI
  appBg: 'rgb(154, 168, 252)',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'LILAB',
  brandUrl: 'https://www.lilab.pe',
  brandImage: 'https://www.lilab.pe/static/media/logo-lilab.56bd23d50f8d897f9d1fd457f62c355b.svg',
  brandTarget: '_blank'
});