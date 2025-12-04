import { ChevronRight, ExternalLink, Github } from 'lucide-react';

import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { ProjectsViewProps } from '../models/ProjectsView.model';

export default function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <Section id="projects">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Projetos em Destaque</h2>
        <div className="h-1 w-16 bg-primary"></div>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={project.id} className="grid items-center gap-8 md:grid-cols-12">
              {/* Image Area */}
              <div
                className={cn('md:col-span-7 relative group', isEven ? 'order-1 md:order-2' : '')}
              >
                <div
                  className={cn(
                    'absolute inset-0 bg-primary/20 rounded transition-transform',
                    isEven
                      ? '-translate-x-2 translate-y-2 group-hover:-translate-x-1 group-hover:translate-y-1'
                      : 'translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1'
                  )}
                ></div>
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded border border-slate-700 bg-surface shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.imagePlaceholder}
                    className="size-full object-cover"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div
                className={cn(
                  'md:col-span-5 z-10',
                  isEven
                    ? 'text-left order-2 md:order-1'
                    : 'md:-ml-12 text-right md:text-right text-left'
                )}
              >
                <p className="mb-2 font-mono text-sm text-primary">{project.type}</p>
                <h3 className="mb-4 text-2xl font-bold text-white">{project.title}</h3>
                <div
                  className={cn(
                    'bg-[#112240] p-6 rounded shadow-xl mb-6 text-slate-400 text-sm leading-relaxed',
                    isEven ? 'md:-mr-12 relative z-20' : ''
                  )}
                >
                  {project.description}
                </div>
                <div
                  className={cn(
                    'flex flex-wrap gap-4 mb-6 font-mono text-xs text-slate-400',
                    isEven ? '' : 'justify-end md:justify-end justify-start'
                  )}
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div
                  className={cn(
                    'flex gap-4',
                    isEven ? '' : 'justify-end md:justify-end justify-start'
                  )}
                >
                  <a
                    href={project.links.github}
                    className="text-slate-300 transition-colors hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.external}
                    className="text-slate-300 transition-colors hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded border border-primary px-8 py-4 font-bold text-primary transition-colors hover:bg-primary/10"
        >
          Ver Arquivo Completo <ChevronRight size={18} />
        </a>
      </div>
    </Section>
  );
}
