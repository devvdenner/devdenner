'use client';

import { GlobeSimple } from '@phosphor-icons/react';

import { AnimatePresence, motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { LocaleSwitcherProps } from './LocaleSwitcher.model';
import { localeSwitcherStyles } from './LocaleSwitcher.styles';
import { useLocaleSwitcherViewModel } from './LocaleSwitcher.viewmodel';

export const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const {
    currentOption,
    currentLocale,
    localeOptions,
    isOpen,
    toggleDropdown,
    handleLocaleChange,
    containerRef,
    className,
  } = useLocaleSwitcherViewModel(props);

  return (
    <div ref={containerRef} className={cn(localeSwitcherStyles.container(), className)}>
      <button
        onClick={toggleDropdown}
        className={cn(localeSwitcherStyles.trigger())}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <GlobeSimple size={18} weight="bold" />
        <span>{currentOption.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(localeSwitcherStyles.dropdown())}
          >
            {localeOptions.map((option) => (
              <button
                key={option.value}
                role="option"
                aria-selected={currentLocale === option.value}
                onClick={() => handleLocaleChange(option.value)}
                className={cn(
                  localeSwitcherStyles.option({ active: currentLocale === option.value })
                )}
              >
                <span>{option.flag}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
