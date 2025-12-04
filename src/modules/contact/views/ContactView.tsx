import { Github,Linkedin, Mail } from 'lucide-react';
import React from 'react';

import { Section } from '@/_shared/components/Section';

import { ContactViewProps } from '../models/ContactView.model';
import { ContactForm } from './components/ContactForm';

export default function ContactView({ profile }: ContactViewProps) {
    return (
        <Section id="contact" className="bg-gradient-to-b from-background to-[#0a101f]">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <p className="mb-4 font-mono text-primary">Qual o próximo passo?</p>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Vamos trabalhar juntos?</h2>
                    <p className="mx-auto max-w-xl text-lg text-slate-400">
                        Estou atualmente aberto a novas oportunidades. Se você tem uma pergunta ou apenas quer dar um oi, minha caixa de entrada está sempre aberta!
                    </p>
                </div>

                <div className="grid items-start gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Contatos</h3>
                        <a href={`mailto:${profile.socials.email}`} className="flex cursor-pointer items-center gap-4 text-slate-400 transition-colors hover:text-primary">
                            <Mail size={20} />
                            <span>{profile.socials.email}</span>
                        </a>
                        <a href={`https://${profile.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center gap-4 text-slate-400 transition-colors hover:text-primary">
                            <Linkedin size={20} />
                            <span>{profile.socials.linkedin}</span>
                        </a>
                        <a href={`https://${profile.socials.github}`} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center gap-4 text-slate-400 transition-colors hover:text-primary">
                            <Github size={20} />
                            <span>{profile.socials.github}</span>
                        </a>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}
