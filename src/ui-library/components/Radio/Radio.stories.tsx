import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI Library/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'example-group',
  },
};

export const Group: Story = {
  render: () => (
    <div>
      <Radio name="gender" label="Male" value="male" />
      <Radio name="gender" label="Female" value="female" />
      <Radio name="gender" label="Other" value="other" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable',
    disabled: true,
  },
};
