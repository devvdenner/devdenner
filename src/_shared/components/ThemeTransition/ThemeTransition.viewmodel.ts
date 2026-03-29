import { useCallback, useEffect, useRef, useState } from 'react';

import { useThemeStore } from '@/_shared/store/theme.store';

export const useThemeTransitionViewModel = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [origin, setOrigin] = useState({ x: '50%', y: '50%' });
  const previousTheme = useRef(useThemeStore.getState().theme);
  const isInitialRender = useRef(true);

  const triggerTransition = useCallback(() => {
    const toggleButton = document.querySelector('[aria-label*="Switch to"]');
    if (toggleButton) {
      const rect = toggleButton.getBoundingClientRect();
      setOrigin({
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      });
    }
    setIsTransitioning(true);
  }, []);

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe((state) => {
      if (state.theme !== previousTheme.current) {
        previousTheme.current = state.theme;
        if (isInitialRender.current) {
          isInitialRender.current = false;
          return;
        }
        triggerTransition();
      }
    });

    requestAnimationFrame(() => {
      isInitialRender.current = false;
    });

    return unsubscribe;
  }, [triggerTransition]);

  const handleAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return {
    isTransitioning,
    origin,
    handleAnimationComplete,
  };
};
