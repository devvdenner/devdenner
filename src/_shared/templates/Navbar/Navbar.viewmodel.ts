import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { INavbarModel } from './Navbar.model';

export const useNavbarViewModel = (props: INavbarModel) => {
  const t = useTranslations('Navbar.links');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  return {
    ...props,
    isScrolled,
    isMenuOpen,
    toggleMenu,
    closeMenu,
    navLinks,
  };
};
