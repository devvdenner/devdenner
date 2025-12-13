'use client';

import { Layout, Server, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Section } from '@/_shared/components/Section';
import { cn } from '@/_shared/utils/cn';

import { AboutViewProps } from '../models/AboutView.model';
import { useAboutViewModel } from '../viewmodels/AboutView.viewmodel';
import { aboutViewStyles } from './AboutView.styles';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={32} />,
  Smartphone: <Smartphone size={32} />,
  Server: <Server size={32} />,
};

export const AboutView = (props: AboutViewProps) => {
  const { services, stats } = useAboutViewModel(props);
  const t = useTranslations('About');

  return (
    <Section id="about" className={cn(aboutViewStyles.section())}>
      <div className={cn(aboutViewStyles.header())}>
        <h2 className={cn(aboutViewStyles.title())}>{t('title')}</h2>
        <div className={cn(aboutViewStyles.divider())}></div>
      </div>

      <div className={cn(aboutViewStyles.grid())}>
        {/* Services List */}
        <div className={cn(aboutViewStyles.servicesList())}>
          {services.map((service, index) => (
            <div key={index} className={cn(aboutViewStyles.serviceItem())}>
              <div className={cn(aboutViewStyles.iconWrapper())}>{iconMap[service.icon]}</div>
              <div className={cn(aboutViewStyles.serviceContent())}>
                <h3 className={cn(aboutViewStyles.serviceTitle())}>{service.title}</h3>
                <p className={cn(aboutViewStyles.serviceDesc())}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bio & Stats */}
        <div className={cn(aboutViewStyles.bioContainer())}>
          <p className={cn(aboutViewStyles.bioText())}>{t('bio')}</p>

          <div className={cn(aboutViewStyles.statsGrid())}>
            {stats.map((stat, index) => (
              <div key={index} className={cn(aboutViewStyles.statItem())}>
                <h4 className={cn(aboutViewStyles.statValue())}>
                  {stat.value}
                  <span className={cn(aboutViewStyles.statSuffix())}>{stat.suffix}</span>
                </h4>
                <p className={cn(aboutViewStyles.statLabel())}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
