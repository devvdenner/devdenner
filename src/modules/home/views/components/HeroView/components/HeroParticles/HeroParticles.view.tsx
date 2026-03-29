'use client';

import { cn } from '@/_shared/utils/cn';

import { HeroParticlesProps } from './HeroParticles.model';
import { heroParticlesStyles } from './HeroParticles.styles';
import { useHeroParticlesViewModel } from './HeroParticles.viewmodel';

export const HeroParticles = (props: HeroParticlesProps) => {
  const { canvasRef, className } = useHeroParticlesViewModel(props);

  return (
    <canvas
      ref={canvasRef}
      className={cn(heroParticlesStyles.canvas(), className)}
      aria-hidden="true"
    />
  );
};
