import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex cursor-pointer items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-lg hover:-translate-y-1 hover:bg-[#ff5252] hover:shadow-primary/25',
        secondary: 'bg-slate-600 text-white shadow-lg hover:-translate-y-1 hover:bg-slate-700',
        outline: 'border border-slate-300 text-slate-700 hover:-translate-y-1 hover:bg-slate-50',
        whatsapp:
          'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:scale-105 hover:shadow-green-500/25',
        outlinePrimary:
          'border border-primary/50 bg-primary/10 text-primary shadow-lg hover:scale-105 hover:border-primary hover:bg-primary/20 hover:shadow-primary/25',
        icon: 'bg-slate-800 text-slate-400 hover:scale-110 hover:text-white hover:shadow-lg',
      },
      shape: {
        default: 'rounded-md',
        rounded: 'rounded-full',
      },
      size: {
        default: 'w-full px-4 py-3',
        icon: 'w-auto p-3',
      },
      iconColor: {
        default: 'hover:bg-slate-700',
        github: 'hover:bg-slate-700',
        linkedin: 'hover:bg-blue-600',
        whatsapp: 'hover:bg-green-600',
      },
    },
    defaultVariants: {
      variant: 'primary',
      shape: 'default',
      size: 'default',
      iconColor: 'default',
    },
  }
);
