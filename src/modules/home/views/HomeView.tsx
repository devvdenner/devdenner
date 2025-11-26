import React from 'react';
import { HeroView } from './components/HeroView';
import { TechStack } from './components/TechStack';

import { IProfileSummary } from '@/modules/home/models';

interface HomeViewProps {
    profile: IProfileSummary;
    techStack: string[];
}

export default function HomeView({ profile, techStack }: HomeViewProps) {
    return (
        <>
            <HeroView profile={profile} />
            <TechStack technologies={techStack} />
        </>
    );
}
