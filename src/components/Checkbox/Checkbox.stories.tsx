import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI Library/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Remember me',
  },
};

export const Checked: Story = {
  args: {
    label: 'I agree to terms',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    defaultChecked: true,
  },
};
