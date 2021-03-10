import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: 'Button',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Normal = Template.bind({});
Normal.args = {
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  look: 'outline',
  children: 'Button',
};
