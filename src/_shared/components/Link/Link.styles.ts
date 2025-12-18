import { cva } from 'class-variance-authority';

export const linkStyles = cva('transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-primary hover:underline',
      nav: 'font-medium text-slate-300 hover:text-primary dark:text-slate-300',
      logo: 'font-bold tracking-tighter text-slate-600 hover:opacity-80 dark:text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
