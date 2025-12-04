import { cva } from 'class-variance-authority';

export const linkStyles = cva('transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-primary hover:underline',
      nav: 'font-medium text-slate-300 hover:text-primary',
      logo: 'font-bold tracking-tighter text-white hover:opacity-80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
