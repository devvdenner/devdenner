import { cva } from 'class-variance-authority';

export const contactViewStyles = {
  section: cva(''),
  container: cva('mx-auto max-w-4xl'),
  header: cva('mb-16 text-center'),
  subtitle: cva('mb-4 font-mono text-primary'),
  title: cva('mb-6 text-4xl font-bold text-foreground md:text-5xl'),
  description: cva('mx-auto max-w-xl text-lg text-muted-foreground'),
  contentGrid: cva('grid items-start gap-12 md:grid-cols-2'),
  contactsList: cva('space-y-6'),
  contactsTitle: cva('text-2xl font-bold text-foreground'),
  contactLink: cva(
    'flex cursor-pointer items-center gap-4 text-muted-foreground transition-colors hover:text-primary'
  ),
};
