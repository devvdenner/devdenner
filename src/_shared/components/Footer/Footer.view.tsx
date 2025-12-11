import { Github, Linkedin } from 'lucide-react';

import { cn } from '@/_shared/utils/cn';

import { IFooterModel } from './Footer.model';
import { footerVariants } from './Footer.styles';
import { useFooterViewModel } from './Footer.viewmodel';

export const Footer = (props: IFooterModel) => {
  const { className, ...rest } = useFooterViewModel(props);

  return (
    <footer className={cn(footerVariants(), className)} {...rest}>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://github.com/devvdenner"
          className="text-slate-500 transition-colors hover:text-primary"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/denner-nascimento/"
          className="text-slate-500 transition-colors hover:text-primary"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
};
