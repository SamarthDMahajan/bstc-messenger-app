import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI Library (ui-library)/Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
];

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(args.value);
    return <Dropdown {...args} value={val} onChange={(v) => setVal(v)} />;
  },
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option',
  },
};

export const Preselected: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(args.value || 'two');
    return <Dropdown {...args} value={val} onChange={(v) => setVal(v)} />;
  },
  args: {
    options: sampleOptions,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(args.value);
    return <Dropdown {...args} value={val} onChange={(v) => setVal(v)} disabled />;
  },
  args: {
    options: sampleOptions,
  },
};
