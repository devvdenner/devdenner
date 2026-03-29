export interface HeroParticlesProps {
  particleCount?: number;
  className?: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}
