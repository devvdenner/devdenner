'use client';

import { GithubLogo, Heart, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

import { motion } from '@/_shared/adapters/motion';
import { AnimatedSection } from '@/_shared/components/AnimatedSection';
import { Button } from '@/_shared/components/Button';
import { cn } from '@/_shared/utils/cn';

import { IFooterModel } from './Footer.model';
import { footerVariants } from './Footer.styles';
import { useFooterViewModel } from './Footer.viewmodel';

export const Footer = (props: IFooterModel) => {
  const { className, currentYear, translations, links, ...rest } = useFooterViewModel(props);

  return (
    <footer className={cn(footerVariants(), className)} {...rest}>
      <AnimatedSection direction="up">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex justify-center space-x-6">
            <motion.div whileHover={{ scale: 1.15, y: -2 }}>
              <Button
                href={links.github}
                variant="icon"
                shape="rounded"
                size="icon"
                iconColor="github"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="bold" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15, y: -2 }}>
              <Button
                href={links.linkedin}
                variant="icon"
                shape="rounded"
                size="icon"
                iconColor="linkedin"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="bold" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15, y: -2 }}>
              <Button
                href={links.whatsapp}
                variant="icon"
                shape="rounded"
                size="icon"
                iconColor="whatsapp"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={20} weight="bold" />
              </Button>
            </motion.div>
          </div>

          <p className="mb-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
            {translations.madeWith}
            <Heart size={14} weight="fill" className="text-red-500" />
            {translations.by}
            <span className="font-medium text-foreground">Denner Nascimento</span>
          </p>

          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} DevDenner. {translations.copyright}
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
};
