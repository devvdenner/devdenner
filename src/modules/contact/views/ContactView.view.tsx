'use client';

import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { AnimatedSection } from '@/_shared/components/AnimatedSection';
import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { ContactViewProps } from '../models/ContactView.model';
import { useContactViewModel } from '../viewmodels/ContactView.viewmodel';
import { ContactForm } from './components/ContactForm';
import { contactViewStyles } from './ContactView.styles';

export const ContactView = (props: ContactViewProps) => {
  const { profile } = useContactViewModel(props);
  const t = useTranslations('Contact');

  return (
    <Section id="contact" className={cn(contactViewStyles.section())}>
      <div className={cn(contactViewStyles.container())}>
        <AnimatedSection direction="up">
          <div className={cn(contactViewStyles.header())}>
            <p className={cn(contactViewStyles.subtitle())}>{t('subtitle')}</p>
            <h2 className={cn(contactViewStyles.title())}>{t('title')}</h2>
            <p className={cn(contactViewStyles.description())}>{t('description')}</p>
          </div>
        </AnimatedSection>

        <div className={cn(contactViewStyles.contentGrid())}>
          <AnimatedSection direction="left" delay={0.2}>
            <div className={cn(contactViewStyles.contactsList())}>
              <h3 className={cn(contactViewStyles.contactsTitle())}>{t('contacts')}</h3>
              <a
                href={`mailto:${profile.socials.email}`}
                className={cn(contactViewStyles.contactLink())}
              >
                <EnvelopeSimple size={20} weight="bold" />
                <span>{profile.socials.email}</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(contactViewStyles.contactLink())}
              >
                <LinkedinLogo size={20} weight="bold" />
                <span>linkedin.com/in/denner-nascimento</span>
              </a>
              <a
                href={`https://${profile.socials.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(contactViewStyles.contactLink())}
              >
                <GithubLogo size={20} weight="bold" />
                <span>{profile.socials.github}</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
};
