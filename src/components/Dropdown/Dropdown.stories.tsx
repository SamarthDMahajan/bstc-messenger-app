import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI Library/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
];

const DropdownWrapper = (args: any) => {
  const [selected, setSelected] = useState('');

  return (
    <Dropdown
      {...args}
      value={selected}
      onChange={setSelected}
    />
  );
};

export const Default: Story = {
  render: (args) => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Choose a Language',
    placeholder: 'Select a language...',
  },
};

export const Preselected: Story = {
  render: () => {
    const [selected, setSelected] = useState('typescript');
    return (
      <Dropdown
        options={sampleOptions}
        value={selected}
        onChange={setSelected}
        label="Programming Language"
        placeholder="Select..."
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Required Language',
    error: 'Please select a language',
  },
};

export const Disabled: Story = {
  render: (args) => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Disabled Dropdown',
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  render: (args) => <DropdownWrapper {...args} />,
  args: {
    options: [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2 (Disabled)', disabled: true },
      { value: 'opt3', label: 'Option 3' },
      { value: 'opt4', label: 'Option 4 (Disabled)', disabled: true },
    ],
    label: 'Some Options Disabled',
    placeholder: 'Try clicking disabled options...',
  },
};
