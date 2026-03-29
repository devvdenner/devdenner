import { useThemeStore } from '@/_shared/store/theme.store';

import { ThemeToggleProps } from './ThemeToggle.model';

export const useThemeToggleViewModel = (props: ThemeToggleProps) => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  return {
    ...props,
    isDark,
    toggleTheme,
    size: props.size ?? 20,
  };
};
