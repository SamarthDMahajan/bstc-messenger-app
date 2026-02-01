export interface MessageBubbleProps {
  /** The message text content */
  text: string;
  /** True if the user sent it, false if they received it */
  isSender: boolean;
  /** Optional time string like "10:30 AM" */
  timestamp?: string;
}