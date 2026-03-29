import { useLocale } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Locale } from '@/_shared/contracts/locale.contract';
import { usePathname, useRouter } from '@/i18n/navigation';

import { LocaleOption, LocaleSwitcherProps } from './LocaleSwitcher.model';

const LOCALE_OPTIONS: LocaleOption[] = [
  { value: 'en', label: 'EN', flag: '🇺🇸' },
  { value: 'pt', label: 'PT', flag: '🇧🇷' },
  { value: 'es', label: 'ES', flag: '🇪🇸' },
];

export const useLocaleSwitcherViewModel = (props: LocaleSwitcherProps) => {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = LOCALE_OPTIONS.find((opt) => opt.value === currentLocale) ?? LOCALE_OPTIONS[0];

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const handleLocaleChange = useCallback(
    (locale: Locale) => {
      router.replace(pathname, { locale });
      closeDropdown();
    },
    [router, pathname, closeDropdown]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  return {
    ...props,
    currentLocale,
    currentOption,
    localeOptions: LOCALE_OPTIONS,
    isOpen,
    toggleDropdown,
    closeDropdown,
    handleLocaleChange,
    containerRef,
  };
};
