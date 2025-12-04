import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { ProjectsViewProps } from '../models/ProjectsView.model';
import { useProjectsViewModel } from '../viewmodels/ProjectsView.viewmodel';
import { projectsViewStyles } from './ProjectsView.styles';

export const ProjectsView = (props: ProjectsViewProps) => {
  const { projects } = useProjectsViewModel(props);

  return (
    <Section id="projects" className={cn(projectsViewStyles.section())}>
      <div className={cn(projectsViewStyles.header())}>
        <h2 className={cn(projectsViewStyles.title())}>Projetos em Destaque</h2>
        <div className={cn(projectsViewStyles.divider())}></div>
      </div>

      <div className={cn(projectsViewStyles.projectsList())}>
        {projects.map((project, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={project.id} className={cn(projectsViewStyles.projectItem())}>
              {/* Image Area */}
              <div
                className={cn(
                  projectsViewStyles.imageArea(),
                  isEven ? 'order-1 md:order-2' : ''
                )}
              >
                <div
                  className={cn(
                    projectsViewStyles.imageOverlay(),
                    isEven
                      ? '-translate-x-2 translate-y-2 group-hover:-translate-x-1 group-hover:translate-y-1'
                      : 'translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1'
                  )}
                ></div>
                <div className={cn(projectsViewStyles.imageContainer())}>
                  <img
                    src={project.image as string}
                    alt={project.imagePlaceholder}
                    className={cn(projectsViewStyles.image())}
                  />
                </div>
              </div>

              {/* Content Area */}
              <div
                className={cn(
                  projectsViewStyles.contentArea(),
                  isEven
                    ? 'text-left order-2 md:order-1'
                    : 'md:-ml-12 text-right md:text-right text-left'
                )}
              >
                <p className={cn(projectsViewStyles.projectType())}>{project.type}</p>
                <h3 className={cn(projectsViewStyles.projectTitle())}>{project.title}</h3>
                <div
                  className={cn(
                    projectsViewStyles.projectDesc(),
                    isEven ? 'md:-mr-12 relative z-20' : ''
                  )}
                >
                  {project.description}
                </div>
                <div
                  className={cn(
                    projectsViewStyles.techList(),
                    isEven ? '' : 'justify-end md:justify-end justify-start'
                  )}
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div
                  className={cn(
                    projectsViewStyles.links(),
                    isEven ? '' : 'justify-end md:justify-end justify-start'
                  )}
                >
                  <a
                    href={project.links.github}
                    className={cn(projectsViewStyles.link())}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.external}
                    className={cn(projectsViewStyles.link())}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cn(projectsViewStyles.footer())}>
        <a
          href="#"
          className={cn(projectsViewStyles.viewAllLink())}
        >
          Ver Arquivo Completo <ChevronRight size={18} />
        </a>
      </div>
    </Section>
  );
};
