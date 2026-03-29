'use client';

import { List, X } from '@phosphor-icons/react';

import { AnimatePresence, motion } from '@/_shared/adapters/motion';
import { Link } from '@/_shared/components/Link';
import { LocaleSwitcher } from '@/_shared/components/LocaleSwitcher';
import { ThemeToggle } from '@/_shared/components/ThemeToggle';
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

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} variant="nav" className="text-sm">
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <button onClick={toggleMenu} className="text-foreground md:hidden">
          {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={mobileMenuVariants()}
          >
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

            <div className="flex items-center gap-4 pt-4">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
