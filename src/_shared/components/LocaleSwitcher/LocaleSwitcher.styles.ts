import { cva } from 'class-variance-authority';

export const localeSwitcherStyles = {
  container: cva('relative'),
  trigger: cva(
    'flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
  ),
  dropdown: cva(
    'absolute right-0 top-full mt-2 min-w-[120px] overflow-hidden rounded-lg border border-border bg-card shadow-xl'
  ),
  option: cva(
    'flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-sm transition-colors duration-150 hover:bg-muted',
    {
      variants: {
        active: {
          true: 'bg-primary/10 text-primary',
          false: 'text-foreground',
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),
};
