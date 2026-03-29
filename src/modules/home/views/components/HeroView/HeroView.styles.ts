import { cva } from 'class-variance-authority';

export const heroStyles = {
  section: cva('relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-48'),
  blob1: cva(
    'absolute right-0 top-20 -z-10 -mr-20 size-[500px] rounded-full bg-primary/10 blur-3xl'
  ),
  blob2: cva(
    'absolute bottom-20 left-0 -z-10 -ml-20 size-[400px] rounded-full bg-blue-500/10 blur-3xl'
  ),
  container: cva('relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'),
  content: cva('space-y-6'),
  greeting: cva('font-mono text-lg font-medium text-primary'),
  title: cva(
    'text-5xl font-bold leading-tight text-foreground md:text-7xl'
  ),
  titleDot: cva('text-primary'),
  role: cva('text-2xl font-bold text-muted-foreground md:text-4xl'),
  description: cva('max-w-md pt-4 text-lg leading-relaxed text-muted-foreground'),
  actions: cva('flex gap-4 pt-4'),
  imageWrapper: cva('group relative flex justify-center md:justify-end'),
  imageContainer: cva('relative size-64 md:size-80'),
  imageBorder: cva(
    'absolute inset-0 translate-x-4 translate-y-4 rounded-full border-2 border-primary transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2'
  ),
  imageInner: cva(
    'absolute inset-0 animate-glow-pulse overflow-hidden rounded-full border-4 border-card bg-card shadow-2xl'
  ),
  scrollIndicator: cva(
    'absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle text-muted-foreground'
  ),
};
