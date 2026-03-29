import { cva } from 'class-variance-authority';

export const themeToggleStyles = {
  button: cva(
    'relative flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-300 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
  ),
  iconWrapper: cva('flex items-center justify-center'),
};
