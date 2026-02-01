import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI Library/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    preventCloseOnOutsideClick: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper to handle the "Open/Close" state inside Storybook
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} style={{ padding: '10px 20px', fontSize: '14px' }}>
        Open Modal
      </button>
      <Modal 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        footer={
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setIsOpen(false)} style={{ padding: '8px 16px' }}>
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Confirm
            </button>
          </div>
        }
      >
        <p>This is a reusable modal window! You can put any content here.</p>
        <p>It has a nice backdrop animation and smooth fade-in effect.</p>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action',
  },
};

export const WithoutFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Information',
    footer: undefined,
  },
};

export const PreventOutsideClick: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Important: Cannot Close by Clicking Outside',
    preventCloseOnOutsideClick: true,
  },
};
