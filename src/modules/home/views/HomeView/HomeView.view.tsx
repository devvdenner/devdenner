import React from 'react';

import { cn } from '@/_shared/utils/cn';
import { HeroView } from '../components/HeroView';
import { TechStack } from '../components/TechStack';
import { HomeViewProps } from './HomeView.model';
import { homeViewStyles } from './HomeView.styles';
import { useHomeViewModel } from './HomeView.viewmodel';

export const HomeView = (props: HomeViewProps) => {
  const { profile, techStack } = useHomeViewModel(props);

  return (
    <div className={cn(homeViewStyles.container())}>
      <HeroView profile={profile} />
      <TechStack technologies={techStack} />
    </div>
  );
};
