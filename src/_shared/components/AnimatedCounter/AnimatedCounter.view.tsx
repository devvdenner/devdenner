'use client';

import { motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { AnimatedCounterProps } from './AnimatedCounter.model';
import { animatedCounterStyles } from './AnimatedCounter.styles';
import { useAnimatedCounterViewModel } from './AnimatedCounter.viewmodel';

export const AnimatedCounter = (props: AnimatedCounterProps) => {
  const { ref, displayValue, suffix, className } = useAnimatedCounterViewModel(props);

  return (
    <span ref={ref} className={cn(animatedCounterStyles.container(), className)}>
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
