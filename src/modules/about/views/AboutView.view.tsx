'use client';

import { DeviceMobile, HardDrives, Layout } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { AnimatedCounter } from '@/_shared/components/AnimatedCounter';
import { AnimatedSection } from '@/_shared/components/AnimatedSection';
import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { AboutViewProps } from '../models/AboutView.model';
import { useAboutViewModel } from '../viewmodels/AboutView.viewmodel';
import { aboutViewStyles } from './AboutView.styles';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={32} weight="duotone" />,
  Smartphone: <DeviceMobile size={32} weight="duotone" />,
  Server: <HardDrives size={32} weight="duotone" />,
};

export const AboutView = (props: AboutViewProps) => {
  const { services, stats } = useAboutViewModel(props);
  const t = useTranslations('About');

  return (
    <Section id="about" className={cn(aboutViewStyles.section())}>
      <AnimatedSection direction="up">
        <div className={cn(aboutViewStyles.header())}>
          <h2 className={cn(aboutViewStyles.title())}>{t('title')}</h2>
          <div className={cn(aboutViewStyles.divider())} />
        </div>
      </AnimatedSection>

      <div className={cn(aboutViewStyles.grid())}>
        <div className={cn(aboutViewStyles.servicesList())}>
          {services.map((service, index) => (
            <AnimatedSection key={index} direction="left" delay={index * 0.15}>
              <div className={cn(aboutViewStyles.serviceItem())}>
                <div className={cn(aboutViewStyles.iconWrapper())}>{iconMap[service.icon]}</div>
                <div className={cn(aboutViewStyles.serviceContent())}>
                  <h3 className={cn(aboutViewStyles.serviceTitle())}>{service.title}</h3>
                  <p className={cn(aboutViewStyles.serviceDesc())}>{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="right" delay={0.2}>
          <div className={cn(aboutViewStyles.bioContainer())}>
            <p className={cn(aboutViewStyles.bioText())}>{t('bio')}</p>

            <div className={cn(aboutViewStyles.statsGrid())}>
              {stats.map((stat, index) => (
                <AnimatedSection key={index} direction="up" delay={0.3 + index * 0.1}>
                  <div className={cn(aboutViewStyles.statItem())}>
                    <h4 className={cn(aboutViewStyles.statValue())}>
                      <AnimatedCounter
                        value={parseInt(stat.value)}
                        suffix={stat.suffix}
                        className={cn(aboutViewStyles.statValue())}
                      />
                    </h4>
                    <p className={cn(aboutViewStyles.statLabel())}>{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};
