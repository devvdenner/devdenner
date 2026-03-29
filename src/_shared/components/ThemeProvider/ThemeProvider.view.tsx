'use client';

import { ThemeProviderProps } from './ThemeProvider.model';
import { useThemeProviderViewModel } from './ThemeProvider.viewmodel';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isMounted } = useThemeProviderViewModel();

  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
};
