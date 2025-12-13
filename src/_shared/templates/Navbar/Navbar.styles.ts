import { cva } from 'class-variance-authority';

export const navbarVariants = cva('fixed top-0 z-50 w-full transition-all duration-300', {
  variants: {
    scrolled: {
      true: 'bg-background/90 py-4 shadow-lg backdrop-blur-md',
      false: 'bg-transparent py-6',
    },
  },
  defaultVariants: {
    scrolled: false,
  },
});

export const mobileMenuVariants = cva(
  'absolute left-0 top-full flex w-full flex-col items-center space-y-4 border-t border-slate-700 bg-surface py-6 shadow-2xl md:hidden'
);
