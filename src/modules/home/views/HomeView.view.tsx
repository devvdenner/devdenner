import React from 'react';

import { cn } from '@/_shared/utils/cn';

import { HomeViewProps } from '../models/HomeView.model';
import { useHomeViewModel } from '../viewmodels/HomeView.viewmodel';
import { HeroView } from './components/HeroView';
import { TechStack } from './components/TechStack';
import { homeViewStyles } from './HomeView.styles';

export const HomeView = (props: HomeViewProps) => {
  const { profile, techStack } = useHomeViewModel(props);

  return (
    <div className={cn(homeViewStyles.container())}>
      <HeroView profile={profile} />
      <TechStack technologies={techStack} />
    </div>
  );
};
