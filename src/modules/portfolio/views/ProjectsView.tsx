import React from 'react';
import { Section } from '@/_shared/components/Section';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { cn } from '@/_shared/utils/cn';

interface Project {
    id: number;
    type: string;
    title: string;
    description: string;
    tech: string[];
    imagePlaceholder: string;
    links: {
        github: string;
        external: string;
    };
}

interface ProjectsViewProps {
    projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
    return (
        <Section id="projects">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
                <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-24">
                {projects.map((project, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={project.id} className="grid md:grid-cols-12 gap-8 items-center">
                            {/* Image Area */}
                            <div className={cn(
                                "md:col-span-7 relative group",
                                isEven ? "order-1 md:order-2" : ""
                            )}>
                                <div className={cn(
                                    "absolute inset-0 bg-primary/20 rounded transition-transform",
                                    isEven
                                        ? "-translate-x-2 translate-y-2 group-hover:-translate-x-1 group-hover:translate-y-1"
                                        : "translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1"
                                )}></div>
                                <div className="relative rounded overflow-hidden shadow-2xl bg-surface aspect-video flex items-center justify-center border border-slate-700">
                                    <span className="text-slate-600 font-mono">Image Preview: {project.imagePlaceholder}</span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className={cn(
                                "md:col-span-5 z-10",
                                isEven ? "text-left order-2 md:order-1" : "md:-ml-12 text-right md:text-right text-left"
                            )}>
                                <p className="text-primary font-mono text-sm mb-2">{project.type}</p>
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                <div className={cn(
                                    "bg-[#112240] p-6 rounded shadow-xl mb-6 text-slate-400 text-sm leading-relaxed",
                                    isEven ? "md:-mr-12 relative z-20" : ""
                                )}>
                                    {project.description}
                                </div>
                                <div className={cn(
                                    "flex flex-wrap gap-4 mb-6 font-mono text-xs text-slate-400",
                                    isEven ? "" : "justify-end md:justify-end justify-start"
                                )}>
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className={cn(
                                    "flex gap-4",
                                    isEven ? "" : "justify-end md:justify-end justify-start"
                                )}>
                                    <a href={project.links.github} className="text-slate-300 hover:text-primary transition-colors"><Github size={20} /></a>
                                    <a href={project.links.external} className="text-slate-300 hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-20">
                <a href="#" className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded font-bold hover:bg-primary/10 transition-colors">
                    Ver Arquivo Completo <ChevronRight size={18} />
                </a>
            </div>
        </Section>
    );
}
