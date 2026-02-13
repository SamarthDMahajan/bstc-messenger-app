import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';
import { Button } from '../Button/Button';

const meta: Meta<typeof Snackbar> = {
  title: 'UI Library/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

// Wrapper to handle open/close state inside Storybook
const SnackbarWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Show Snackbar
      </Button>
      <Snackbar 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Action completed successfully!',
    autoHideDuration: 3000,
    type: 'default',
  },
};

export const Success: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Changes saved successfully',
    type: 'success',
  },
};

export const Error: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Failed to connect to server',
    type: 'error',
    autoHideDuration: 5000,
  },
};
