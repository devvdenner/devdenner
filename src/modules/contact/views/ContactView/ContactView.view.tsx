import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { ContactForm } from '../components/ContactForm';
import { ContactViewProps } from './ContactView.model';
import { contactViewStyles } from './ContactView.styles';
import { useContactViewModel } from './ContactView.viewmodel';

export const ContactView = (props: ContactViewProps) => {
  const { profile } = useContactViewModel(props);

  return (
    <Section id="contact" className={cn(contactViewStyles.section())}>
      <div className={cn(contactViewStyles.container())}>
        <div className={cn(contactViewStyles.header())}>
          <p className={cn(contactViewStyles.subtitle())}>Qual o próximo passo?</p>
          <h2 className={cn(contactViewStyles.title())}>
            Vamos trabalhar juntos?
          </h2>
          <p className={cn(contactViewStyles.description())}>
            Estou atualmente aberto a novas oportunidades. Se você tem uma pergunta ou apenas quer
            dar um oi, minha caixa de entrada está sempre aberta!
          </p>
        </div>

        <div className={cn(contactViewStyles.contentGrid())}>
          <div className={cn(contactViewStyles.contactsList())}>
            <h3 className={cn(contactViewStyles.contactsTitle())}>Contatos</h3>
            <a
              href={`mailto:${profile.socials.email}`}
              className={cn(contactViewStyles.contactLink())}
            >
              <Mail size={20} />
              <span>{profile.socials.email}</span>
            </a>
            <a
              href={`https://${profile.socials.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(contactViewStyles.contactLink())}
            >
              <Linkedin size={20} />
              <span>{profile.socials.linkedin}</span>
            </a>
            <a
              href={`https://${profile.socials.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(contactViewStyles.contactLink())}
            >
              <Github size={20} />
              <span>{profile.socials.github}</span>
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
