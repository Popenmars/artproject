"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById('contact');
            const scrollY = window.scrollY;

            let isOverContact = false;
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    isOverContact = true;
                }
            }

            if (scrollY > 50 && !isOverContact) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;
    const isServiceActive = () => ['/artgalaxy', '/inkedvilla', '/soundspace'].some(path => pathname.startsWith(path));

    return (
        <nav className={`${styles.navbar} fixed-top ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.brand}>
                        <Image src="/img/marslogo1.png" alt="Mars Synergy Logo" width={50} height={50} className={styles.logo} />
                        MARSYNERGY
                    </Link>

                    <button
                        className={styles.toggler}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className={styles.togglerIcon}></span>
                    </button>

                    <div className={`${styles.collapse} ${isOpen ? styles.show : ''}`}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link
                                    href="/"
                                    className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="/aboutus"
                                    className={`${styles.navLink} ${isActive('/aboutus') ? styles.active : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className={`${styles.navItem} ${styles.dropdown}`} ref={dropdownRef}>
                                <span
                                    className={`${styles.navLink} ${isServiceActive() ? styles.active : ''}`}
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    role="button"
                                >
                                    Services <FaChevronDown className={`${styles.dropdownIcon} ${dropdownOpen ? styles.rotate : ''}`} />
                                </span>
                                <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.showDropdown : ''}`}>
                                    <li>
                                        <Link
                                            href="/artgalaxy"
                                            className={`${styles.dropdownItem} ${isActive('/artgalaxy') ? styles.active : ''}`}
                                            onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                                        >
                                            Art Galaxy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/inkedvilla"
                                            className={`${styles.dropdownItem} ${isActive('/inkedvilla') ? styles.active : ''}`}
                                            onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                                        >
                                            Inked Villa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/soundspace"
                                            className={`${styles.dropdownItem} ${isActive('/soundspace') ? styles.active : ''}`}
                                            onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                                        >
                                            Sound Space
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="/contact"
                                    className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="/signup"
                                    className={`${styles.navLink} ${isActive('/signup') ? styles.active : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
