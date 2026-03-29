import { ReactNode } from 'react';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export interface AnimatedSectionProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}
