import '!style-loader!css-loader!sass-loader!../src/index.scss';
import "../src/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Getting Started',['Intro', 'Onboarding', 'Obtain License'], 'Components', ['Button', ['Solid', 'Outline']]],
    },
  },
}