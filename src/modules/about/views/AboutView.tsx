import { Layout, Server,Smartphone } from 'lucide-react';
import React from 'react';

import { Section } from '@/_shared/components/Section';

import { AboutViewProps } from '../models/AboutView.model';

const iconMap: Record<string, React.ReactNode> = {
    'Layout': <Layout size={32} />,
    'Smartphone': <Smartphone size={32} />,
    'Server': <Server size={32} />,
};

export default function AboutView({ services, stats }: AboutViewProps) {
    return (
        <Section id="about" className="bg-[#141d33]">
            <div className="mb-16 flex items-center gap-4">
                <h2 className="text-3xl font-bold text-white md:text-4xl">Sobre Mim</h2>
                <div className="h-px max-w-xs grow bg-slate-700"></div>
            </div>

            <div className="grid gap-16 md:grid-cols-2">
                {/* Services List */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div key={index} className="group flex gap-6">
                            <div className="h-fit rounded-lg bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110">
                                {iconMap[service.icon]}
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bio & Stats */}
                <div>
                    <p className="mb-8 leading-relaxed text-slate-400">
                        Comecei minha jornada na programação através do design. Desde então, aprendi a amar o processo de construir coisas do zero. Isso me levou ao desenvolvimento de software, unindo minha paixão por aprendizado contínuo e resolução de problemas complexos.
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h4 className="mb-1 text-4xl font-bold text-white">
                                    {stat.value}<span className="text-primary">{stat.suffix}</span>
                                </h4>
                                <p className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
