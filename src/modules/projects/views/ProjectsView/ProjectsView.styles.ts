import { cva } from 'class-variance-authority';

export const projectsViewStyles = {
  section: cva(''),
  header: cva('mb-16 flex flex-col items-center text-center'),
  title: cva('mb-4 text-3xl font-bold text-white md:text-4xl'),
  divider: cva('h-1 w-16 bg-primary'),
  projectsList: cva('space-y-24'),
  projectItem: cva('grid items-center gap-8 md:grid-cols-12'),
  imageArea: cva('md:col-span-7 relative group'),
  imageOverlay: cva('absolute inset-0 bg-primary/20 rounded transition-transform'),
  imageContainer: cva(
    'relative flex aspect-video items-center justify-center overflow-hidden rounded border border-slate-700 bg-surface shadow-2xl'
  ),
  image: cva('size-full object-cover'),
  contentArea: cva('md:col-span-5 z-10'),
  projectType: cva('mb-2 font-mono text-sm text-primary'),
  projectTitle: cva('mb-4 text-2xl font-bold text-white'),
  projectDesc: cva(
    'bg-[#112240] p-6 rounded shadow-xl mb-6 text-slate-400 text-sm leading-relaxed'
  ),
  techList: cva('flex flex-wrap gap-4 mb-6 font-mono text-xs text-slate-400'),
  links: cva('flex gap-4'),
  link: cva('text-slate-300 transition-colors hover:text-primary'),
  footer: cva('mt-20 text-center'),
  viewAllLink: cva(
    'inline-flex items-center gap-2 rounded border border-primary px-8 py-4 font-bold text-primary transition-colors hover:bg-primary/10'
  ),
};
