import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Example', 'Components', ['Button', ['Solid', 'Flat']]],
    },
  },
}