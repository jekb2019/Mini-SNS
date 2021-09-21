import React from 'react';
import Center from '../storyUtil/center/Center';
import Input from './Input';

export default {
  title: 'Controllers/Input',
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Lemme know smth 🥸',
};
