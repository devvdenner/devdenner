import { cva } from 'class-variance-authority';

export const techStackStyles = {
  container: cva('mx-auto mt-12 max-w-6xl border-t border-slate-800 px-6 py-12'),
  list: cva(
    'flex flex-wrap items-center justify-between gap-6 opacity-60 transition-opacity hover:opacity-100'
  ),
  item: cva(
    'cursor-default text-sm font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:text-primary md:text-base'
  ),
};
