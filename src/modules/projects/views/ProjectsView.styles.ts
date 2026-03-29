import { cva } from 'class-variance-authority';

export const projectsViewStyles = {
  section: cva(''),
  header: cva('mb-16 flex flex-col items-center text-center'),
  title: cva('mb-4 text-3xl font-bold text-foreground md:text-4xl'),
  divider: cva('h-1 w-16 bg-primary'),
  projectsList: cva('space-y-24'),
  projectItem: cva('grid items-center gap-8 md:grid-cols-12'),
  imageArea: cva('group relative md:col-span-7'),
  imageOverlay: cva('absolute inset-0 rounded bg-primary/20 transition-transform'),
  imageContainer: cva(
    'relative flex aspect-video items-center justify-center overflow-hidden rounded border border-border bg-card shadow-2xl'
  ),
  image: cva('size-full object-cover'),
  contentArea: cva('z-10 md:col-span-5'),
  projectType: cva('mb-2 font-mono text-sm text-primary'),
  projectTitle: cva('mb-4 text-2xl font-bold text-foreground'),
  projectDesc: cva(
    'mb-6 rounded bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-xl'
  ),
  techList: cva('mb-6 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground'),
  links: cva('flex gap-4'),
  link: cva('text-muted-foreground transition-colors hover:text-primary'),
};
