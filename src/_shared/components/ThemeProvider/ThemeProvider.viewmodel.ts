import { useEffect, useState } from 'react';

import { initializeTheme } from '@/_shared/store/theme.store';

export const useThemeProviderViewModel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    initializeTheme();
    const frameId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return { isMounted };
};
