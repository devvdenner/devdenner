'use client';

import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/_shared/adapters/motion';
import { AnimatedSection } from '@/_shared/components/AnimatedSection';
import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { ProjectsViewProps } from '../models/ProjectsView.model';
import { useProjectsViewModel } from '../viewmodels/ProjectsView.viewmodel';
import { projectsViewStyles } from './ProjectsView.styles';

export const ProjectsView = (props: ProjectsViewProps) => {
  const { projects } = useProjectsViewModel(props);
  const t = useTranslations('Projects');

  return (
    <Section id="projects" className={cn(projectsViewStyles.section())}>
      <AnimatedSection direction="up">
        <div className={cn(projectsViewStyles.header())}>
          <h2 className={cn(projectsViewStyles.title())}>{t('title')}</h2>
          <div className={cn(projectsViewStyles.divider())} />
        </div>
      </AnimatedSection>

      <div className={cn(projectsViewStyles.projectsList())}>
        {projects.map((project, index) => {
          const isEven = index % 2 !== 0;
          return (
            <AnimatedSection
              key={project.id}
              direction={isEven ? 'left' : 'right'}
              delay={0.1}
            >
              <div className={cn(projectsViewStyles.projectItem())}>
                <div
                  className={cn(projectsViewStyles.imageArea(), isEven ? 'order-1 md:order-2' : '')}
                >
                  <div
                    className={cn(
                      projectsViewStyles.imageOverlay(),
                      isEven
                        ? '-translate-x-2 translate-y-2 group-hover:-translate-x-1 group-hover:translate-y-1'
                        : 'translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1'
                    )}
                  />
                  <motion.div
                    className={cn(projectsViewStyles.imageContainer())}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image as string}
                      alt={project.imagePlaceholder}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className={cn(projectsViewStyles.image())}
                    />
                  </motion.div>
                </div>

                <div
                  className={cn(
                    projectsViewStyles.contentArea(),
                    isEven
                      ? 'order-2 text-left md:order-1'
                      : 'text-left md:-ml-12 md:text-right'
                  )}
                >
                  <p className={cn(projectsViewStyles.projectType())}>{project.type}</p>
                  <h3 className={cn(projectsViewStyles.projectTitle())}>{project.title}</h3>
                  <div
                    className={cn(
                      projectsViewStyles.projectDesc(),
                      isEven ? 'relative z-20 md:-mr-12' : ''
                    )}
                  >
                    {project.description}
                  </div>
                  <div
                    className={cn(
                      projectsViewStyles.techList(),
                      isEven ? '' : 'justify-start md:justify-end'
                    )}
                  >
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div
                    className={cn(
                      projectsViewStyles.links(),
                      isEven ? '' : 'justify-start md:justify-end'
                    )}
                  >
                    <a href={project.links.github} className={cn(projectsViewStyles.link())}>
                      <GithubLogo size={20} weight="bold" />
                    </a>
                    <a href={project.links.external} className={cn(projectsViewStyles.link())}>
                      <ArrowSquareOut size={20} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
};
