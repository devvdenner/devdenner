import { cva } from 'class-variance-authority';

export const typeWriterStyles = {
  container: cva('inline-flex items-center'),
  cursor: cva('ml-0.5 inline-block animate-blink font-light text-primary'),
};
