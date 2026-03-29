'use client';

import { motion } from '@/_shared/adapters/motion';
import { AnimatedSection } from '@/_shared/components/AnimatedSection';
import { cn } from '@/_shared/utils/cn';

import { TechStackProps } from './TechStack.model';
import { useTechStackViewModel } from './TechStack.viewmodel';

export const TechStack = (props: TechStackProps) => {
  const { technologies, styles } = useTechStackViewModel(props);

  return (
    <AnimatedSection direction="up" delay={0.2}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.list())}>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className={cn(styles.item())}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1, color: '#FF6B6B' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
