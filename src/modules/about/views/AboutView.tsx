import React from 'react';
import { Section } from '@/_shared/components/Section';
import { Layout, Smartphone, Server } from 'lucide-react';

interface Service {
    icon: string;
    title: string;
    desc: string;
}

interface Stat {
    value: string;
    suffix: string;
    label: string;
}

interface AboutViewProps {
    services: Service[];
    stats: Stat[];
}

const iconMap: Record<string, React.ReactNode> = {
    'Layout': <Layout size={32} />,
    'Smartphone': <Smartphone size={32} />,
    'Server': <Server size={32} />,
};

export default function AboutView({ services, stats }: AboutViewProps) {
    return (
        <Section id="about" className="bg-[#141d33]">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mim</h2>
                <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
                {/* Services List */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6 group">
                            <div className="text-primary p-3 bg-primary/10 rounded-lg h-fit group-hover:scale-110 transition-transform">
                                {iconMap[service.icon]}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bio & Stats */}
                <div>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        Comecei minha jornada na programação através do design. Desde então, aprendi a amar o processo de construir coisas do zero. Isso me levou ao desenvolvimento de software, unindo minha paixão por aprendizado contínuo e resolução de problemas complexos.
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h4 className="text-4xl font-bold text-white mb-1">
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
