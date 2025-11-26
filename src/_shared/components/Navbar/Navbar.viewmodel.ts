import { useState, useEffect } from 'react';
import { INavbarModel } from './Navbar.model';

export const useNavbarViewModel = (props: INavbarModel) => {
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
        { name: 'Home', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
    ];

    return {
        ...props,
        isScrolled,
        isMenuOpen,
        toggleMenu,
        closeMenu,
        navLinks
    };
};
