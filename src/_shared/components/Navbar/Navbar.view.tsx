'use client';

import { Menu, X } from 'lucide-react';

import { cn } from '@/_shared/utils/cn';

import { INavbarModel } from './Navbar.model';
import { mobileMenuVariants, navbarVariants } from './Navbar.styles';
import { useNavbarViewModel } from './Navbar.viewmodel';

export const Navbar = (props: INavbarModel) => {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu, navLinks, className } =
    useNavbarViewModel(props);

  return (
    <nav className={cn(navbarVariants({ scrolled: isScrolled }), className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          DevDenner<span className="text-primary"> .</span>com
        </a>

        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={toggleMenu} className="text-white md:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={mobileMenuVariants()}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-medium text-slate-300 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
