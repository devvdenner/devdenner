import { useRef } from 'react';

import { useInView, useReducedMotion } from '@/_shared/adapters/motion';

import { AnimatedSectionProps, AnimationDirection } from './AnimatedSection.model';

const OFFSET_MAP: Record<AnimationDirection, { x: number; y: number }> = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

export const useAnimatedSectionViewModel = (props: AnimatedSectionProps) => {
  const { direction = 'up', delay = 0, duration = 0.6, once = true } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const offset = OFFSET_MAP[direction];

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: [0.4, 0, 0.2, 1] as const },
        },
      };

  return {
    ref,
    isInView,
    variants,
    className: props.className,
    children: props.children,
  };
};
