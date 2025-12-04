import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex w-full cursor-pointer items-center justify-center rounded-md  px-4 py-3 font-medium transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-[#ff5252]',
        secondary: 'bg-slate-600 text-white hover:bg-slate-700',
        outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
