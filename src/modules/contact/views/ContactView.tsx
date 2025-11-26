import React from 'react';
import { Section } from '@/_shared/components/Section';
import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactForm } from './components/ContactForm';

interface ContactViewProps {
    profile: {
        socials: {
            email: string;
            linkedin: string;
            github: string;
        }
    }
}

export default function ContactView({ profile }: ContactViewProps) {
    return (
        <Section id="contact" className="bg-gradient-to-b from-background to-[#0a101f]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary font-mono mb-4">Qual o próximo passo?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vamos trabalhar juntos?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg">
                        Estou atualmente aberto a novas oportunidades. Se você tem uma pergunta ou apenas quer dar um oi, minha caixa de entrada está sempre aberta!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Contatos</h3>
                        <a href={`mailto:${profile.socials.email}`} className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                            <Mail size={20} />
                            <span>{profile.socials.email}</span>
                        </a>
                        <a href={`https://${profile.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                            <Linkedin size={20} />
                            <span>{profile.socials.linkedin}</span>
                        </a>
                        <a href={`https://${profile.socials.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors cursor-pointer">
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
