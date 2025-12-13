import { Github, Heart, Linkedin, MessageCircle } from 'lucide-react';

import { Button } from '@/_shared/components/Button';
import { cn } from '@/_shared/utils/cn';

import { IFooterModel } from './Footer.model';
import { footerVariants } from './Footer.styles';
import { useFooterViewModel } from './Footer.viewmodel';

export const Footer = (props: IFooterModel) => {
  const { className, currentYear, translations, links, ...rest } = useFooterViewModel(props);

  return (
    <footer className={cn(footerVariants(), className)} {...rest}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Social Links */}
        <div className="mb-6 flex justify-center space-x-6">
          <Button
            href={links.github}
            variant="icon"
            shape="rounded"
            size="icon"
            iconColor="github"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Button>
          <Button
            href={links.linkedin}
            variant="icon"
            shape="rounded"
            size="icon"
            iconColor="linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Button>
          <Button
            href={links.whatsapp}
            variant="icon"
            shape="rounded"
            size="icon"
            iconColor="whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </Button>
        </div>

        {/* Made with love */}
        <p className="mb-2 flex items-center justify-center gap-1 text-sm text-slate-500">
          {translations.madeWith}
          <Heart size={14} className="fill-red-500 text-red-500" />
          {translations.by}
          <span className="font-medium text-slate-300">Denner Nascimento</span>
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-slate-600">
          © {currentYear} DevDenner. {translations.copyright}
        </p>
      </div>
    </footer>
  );
};
