import { cva } from 'class-variance-authority';

export const aboutViewStyles = {
  section: cva('bg-[#141d33]'),
  header: cva('mb-16 flex items-center gap-4'),
  title: cva('text-3xl font-bold text-white md:text-4xl'),
  divider: cva('h-px max-w-xs grow bg-slate-700'),
  grid: cva('grid gap-16 md:grid-cols-2'),
  servicesList: cva('space-y-8'),
  serviceItem: cva('group flex gap-6'),
  iconWrapper: cva(
    'h-fit rounded-lg bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110'
  ),
  serviceContent: cva(''),
  serviceTitle: cva('mb-2 text-xl font-bold text-white'),
  serviceDesc: cva('text-sm leading-relaxed text-slate-400'),
  bioContainer: cva(''),
  bioText: cva('mb-8 leading-relaxed text-slate-400'),
  statsGrid: cva('grid grid-cols-3 gap-6'),
  statItem: cva(''),
  statValue: cva('mb-1 text-4xl font-bold text-white'),
  statSuffix: cva('text-primary'),
  statLabel: cva('text-xs uppercase tracking-wider text-slate-500'),
};
