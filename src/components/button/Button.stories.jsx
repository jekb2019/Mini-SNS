import React from 'react';
import Center from '../storyUtil/center/Center';
import Button from './Button';

export default {
  title: 'Controllers/Button',
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => <Button {...args} />;

export const SmallShine = Template.bind({});
SmallShine.args = {
  type: 'shine',
  size: 'small',
  label: 'Log out',
};

export const SmallBounce = Template.bind({});
SmallBounce.args = {
  type: 'bounce',
  size: 'small',
  label: 'Delete',
};

export const MediumShine = Template.bind({});
MediumShine.args = {
  ...SmallShine.args,
  size: 'medium',
  label: 'Post',
};

export const MediumBounce = Template.bind({});
MediumBounce.args = {
  ...SmallBounce.args,
  size: 'medium',
  label: 'Post',
};
