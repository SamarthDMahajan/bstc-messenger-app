import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI Library/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['outlined', 'filled'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    label: 'Username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
    variant: 'outlined',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const Filled: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    variant: 'filled',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};
