import React from 'react';
import './MessageBubble.css';

interface MessageBubbleProps {
  text: string;
  isSender: boolean;
}

export const MessageBubble = ({ text, isSender }: MessageBubbleProps) => {
  return (
    <div className={`bubble ${isSender ? 'sent' : 'received'}`}>
      {text}
    </div>
  );
};