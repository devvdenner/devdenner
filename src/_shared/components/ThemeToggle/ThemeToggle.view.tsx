'use client';

import { Moon, Sun } from '@phosphor-icons/react';

import { AnimatePresence, motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { ThemeToggleProps } from './ThemeToggle.model';
import { themeToggleStyles } from './ThemeToggle.styles';
import { useThemeToggleViewModel } from './ThemeToggle.viewmodel';

export const ThemeToggle = (props: ThemeToggleProps) => {
  const { isDark, toggleTheme, size, className } = useThemeToggleViewModel(props);

  return (
    <button
      onClick={toggleTheme}
      className={cn(themeToggleStyles.button(), className)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={cn(themeToggleStyles.iconWrapper())}
          >
            <Moon size={size} weight="fill" className="text-yellow-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={cn(themeToggleStyles.iconWrapper())}
          >
            <Sun size={size} weight="fill" className="text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
