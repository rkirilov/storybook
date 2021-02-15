import { addons } from '@storybook/addons';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
    'storybook/canvas/panel': {
      hidden: true
    },
    canvas: {
      title: 'Story',
      hidden: false,
    },
  },
});