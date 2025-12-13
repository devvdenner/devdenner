import { useTranslations } from 'next-intl';

import { IFooterModel } from './Footer.model';

export const useFooterViewModel = (props: IFooterModel) => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const translations = {
    copyright: t('copyright'),
    madeWith: t('madeWith'),
    by: t('by'),
    whatsapp: t('whatsapp'),
    resume: t('resume'),
  };

  const links = {
    github: 'https://github.com/devvdenner',
    linkedin: 'https://www.linkedin.com/in/denner-nascimento/',
    whatsapp: 'https://wa.me/5582999291721',
    resume: '/resume.pdf', // TODO: Adicionar o arquivo do currículo em public/resume.pdf
  };

  return {
    ...props,
    currentYear,
    translations,
    links,
  };
};
