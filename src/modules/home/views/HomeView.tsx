import React from 'react';
import { HeroView } from './components/HeroView';
import { TechStack } from './components/TechStack';

import { HomeViewProps } from '../models/HomeView.model';

export default function HomeView({ profile, techStack }: HomeViewProps) {
    return (
        <>
            <HeroView profile={profile} />
            <TechStack technologies={techStack} />
        </>
    );
}
