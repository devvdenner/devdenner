import { cva } from 'class-variance-authority';

export const contactFormStyles = {
  form: cva('space-y-6'),
  inputWrapper: cva('relative'),
  input: cva(
    'peer w-full border-b border-slate-700 bg-transparent py-3 text-slate-300 transition-colors placeholder:text-transparent focus:border-primary focus:outline-none'
  ),
  label: cva(
    'absolute -top-3.5 left-0 text-sm text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary'
  ),
  textarea: cva(
    'peer w-full resize-none border-b border-slate-700 bg-transparent py-3 text-slate-300 transition-colors placeholder:text-transparent focus:border-primary focus:outline-none'
  ),
  button: cva(
    'group flex w-full items-center justify-center gap-2 rounded bg-primary px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#ff5252] md:w-auto'
  ),
  icon: cva('transition-transform group-hover:translate-x-1'),
};
