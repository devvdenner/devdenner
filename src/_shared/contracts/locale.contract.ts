export type Locale = 'en' | 'pt' | 'es';

export const isValidLocale = (locale: string): locale is Locale => {
  return ['en', 'pt', 'es'].includes(locale);
};
