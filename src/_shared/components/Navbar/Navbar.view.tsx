'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/_shared/utils/cn';
import { INavbarModel } from './Navbar.model';
import { useNavbarViewModel } from './Navbar.viewmodel';
import { navbarVariants, mobileMenuVariants } from './Navbar.styles';

export const Navbar = (props: INavbarModel) => {
    const {
        isScrolled,
        isMenuOpen,
        toggleMenu,
        closeMenu,
        navLinks,
        className
    } = useNavbarViewModel(props);

    return (
        <nav className={cn(navbarVariants({ scrolled: isScrolled }), className)}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter">
                    DevDenner<span className="text-primary"> .</span>com
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button onClick={toggleMenu} className="md:hidden text-white">
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
                            className="text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
