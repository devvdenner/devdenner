'use client';

import { motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { AnimatedSectionProps } from './AnimatedSection.model';
import { animatedSectionStyles } from './AnimatedSection.styles';
import { useAnimatedSectionViewModel } from './AnimatedSection.viewmodel';

export const AnimatedSection = (props: AnimatedSectionProps) => {
  const { ref, isInView, variants, className, children } = useAnimatedSectionViewModel(props);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(animatedSectionStyles.container(), className)}
    >
      {children}
    </motion.div>
  );
};
