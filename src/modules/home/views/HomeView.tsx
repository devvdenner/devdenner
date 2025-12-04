import React from 'react';

import { HomeViewProps } from '../models/HomeView.model';
import { HeroView } from './components/HeroView';
import { TechStack } from './components/TechStack';

export default function HomeView({ profile, techStack }: HomeViewProps) {
  return (
    <>
      <HeroView profile={profile} />
      <TechStack technologies={techStack} />
    </>
  );
}
