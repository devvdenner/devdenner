import { Locale } from '@/_shared/contracts/locale.contract';

export interface LocaleOption {
  value: Locale;
  label: string;
  flag: string;
}

export interface LocaleSwitcherProps {
  className?: string;
}
