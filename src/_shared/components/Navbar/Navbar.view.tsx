'use client';

import { Menu, X } from 'lucide-react';

import { Link } from '@/_shared/components/Link';
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
        <Link href="#" variant="logo" className="text-2xl">
          DevDenner<span className="text-primary"> .</span>com
        </Link>

        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} variant="nav" className="text-sm">
              {link.name}
            </Link>
          ))}
        </div>

        <button onClick={toggleMenu} className="text-white md:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={mobileMenuVariants()}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              variant="nav"
              className="text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
