import { cva } from 'class-variance-authority';

export const contactViewStyles = {
  section: cva('bg-gradient-to-b from-background to-[#0a101f]'),
  container: cva('mx-auto max-w-4xl'),
  header: cva('mb-16 text-center'),
  subtitle: cva('mb-4 font-mono text-primary'),
  title: cva('mb-6 text-4xl font-bold text-white md:text-5xl'),
  description: cva('mx-auto max-w-xl text-lg text-slate-400'),
  contentGrid: cva('grid items-start gap-12 md:grid-cols-2'),
  contactsList: cva('space-y-6'),
  contactsTitle: cva('text-2xl font-bold text-white'),
  contactLink: cva(
    'flex cursor-pointer items-center gap-4 text-slate-400 transition-colors hover:text-primary'
  ),
};
