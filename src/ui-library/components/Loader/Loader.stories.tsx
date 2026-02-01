import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'UI Library/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'white', 'grey'] },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
  },
};

export const WithLabel: Story = {
  args: {
    size: 'large',
    label: 'Fetching messages...',
  },
};
