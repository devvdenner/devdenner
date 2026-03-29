'use client';

import { AnimatePresence, motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { ThemeTransitionProps } from './ThemeTransition.model';
import { themeTransitionStyles } from './ThemeTransition.styles';
import { useThemeTransitionViewModel } from './ThemeTransition.viewmodel';

export const ThemeTransition = ({}: ThemeTransitionProps) => {
  const { isTransitioning, origin, handleAnimationComplete } = useThemeTransitionViewModel();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className={cn(themeTransitionStyles.overlay())}
          initial={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
          animate={{ clipPath: `circle(150% at ${origin.x} ${origin.y})` }}
          exit={{ opacity: 0 }}
          transition={{
            clipPath: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.3, delay: 0.4 },
          }}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </AnimatePresence>
  );
};
