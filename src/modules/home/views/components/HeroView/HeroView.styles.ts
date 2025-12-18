import { cva } from 'class-variance-authority';

export const heroStyles = {
  section: cva('relative overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-48'),
  blob1: cva('absolute right-0 top-20 -z-10 -mr-20 size-96 rounded-full bg-primary/10 blur-3xl'),
  blob2: cva('absolute bottom-20 left-0 -z-10 -ml-20 size-72 rounded-full bg-blue-500/10 blur-3xl'),
  container: cva('mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'),
  content: cva('animate-fade-in-up space-y-6'),
  greeting: cva('font-mono text-lg font-medium text-primary'),
  title: cva('text-5xl font-bold leading-tight text-slate-600 dark:text-white md:text-7xl'),
  titleDot: cva('text-primary'),
  role: cva('text-3xl font-bold text-slate-400 md:text-5xl'),
  description: cva('max-w-md pt-4 text-lg leading-relaxed text-slate-400'),
  actions: cva('flex gap-4 pt-4'),
  imageWrapper: cva('group relative flex justify-center md:justify-end'),
  imageContainer: cva('relative size-64 md:size-80'),
  imageBorder: cva(
    'absolute inset-0 translate-x-4 translate-y-4 rounded-full border-2 border-primary transition-transform group-hover:translate-x-2 group-hover:translate-y-2'
  ),
  imageInner: cva(
    'absolute inset-0 overflow-hidden rounded-full border-4 border-surface bg-surface shadow-2xl'
  ),
  imagePlaceholder: cva(
    'flex size-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-slate-500'
  ),
  imageIcon: cva('text-6xl'),
};
