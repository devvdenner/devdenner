import { cva } from 'class-variance-authority';

export const themeTransitionStyles = {
  overlay: cva('pointer-events-none fixed inset-0 z-[9999] bg-background'),
};
