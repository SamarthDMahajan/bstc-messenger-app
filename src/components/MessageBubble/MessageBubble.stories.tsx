import type { Meta, StoryObj } from '@storybook/react';
import { MessageBubble } from './MessageBubble';

const meta: Meta<typeof MessageBubble> = {
  title: 'Messenger/MessageBubble', // This name will appear in your sidebar
  component: MessageBubble,
};

export default meta;
type Story = StoryObj<typeof MessageBubble>;

export const Sent: Story = {
  args: { text: 'Hello! I sent this.', isSender: false },
};

export const Received: Story = {
  args: { text: 'I received this!', isSender: false },
};