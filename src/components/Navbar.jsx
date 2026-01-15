import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { scrollToSection } from '../utils/scrollToSection';
const SECTIONS = ['home', 'journey', 'portfolio', 'about'];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const scrollPosition = window.scrollY + 120;

            for (let section of SECTIONS) {
                const element = document.getElementById(section);
                if (!element) continue;

                const offsetTop = element.offsetTop;
                const offsetBottom = offsetTop + element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial run

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, section) => {
        e.preventDefault();
        scrollToSection(section);
        setActiveSection(section);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>

                {/* Logo */}
                <NavLink to="/">
                    <div className={styles.logoContainer}>
                        <svg
                            className={styles.lotusIcon}
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#06b6d4' }} />
                                    <stop offset="50%" style={{ stopColor: '#22d3ee' }} />
                                    <stop offset="100%" style={{ stopColor: '#67e8f9' }} />
                                </linearGradient>
                            </defs>

                            <circle cx="50" cy="50" r="8" className={styles.lotusPetal} />
                            <ellipse cx="50" cy="35" rx="12" ry="20" className={styles.lotusPetal} />
                            <ellipse cx="65" cy="42" rx="12" ry="20" transform="rotate(45 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="65" cy="58" rx="12" ry="20" transform="rotate(90 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="50" cy="65" rx="12" ry="20" transform="rotate(135 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="35" cy="58" rx="12" ry="20" transform="rotate(180 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="35" cy="42" rx="12" ry="20" transform="rotate(225 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="50" cy="35" rx="12" ry="20" transform="rotate(270 50 50)" className={styles.lotusPetal} />
                            <ellipse cx="65" cy="42" rx="12" ry="20" transform="rotate(315 50 50)" className={styles.lotusPetal} />
                        </svg>

                        <div className={styles.logoTextWrapper}>
                            <div className={styles.logoTextMain}>
                                <span className={styles.logoPart1}>SIDDH</span>
                                <span className={styles.logoPart2}>ARTHA</span>
                                <svg
                                    className={styles.logoAccentDot}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
                                        fill="url(#star-gradient)"
                                    />
                                    <defs>
                                        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#06b6d4' }} />
                                            <stop offset="50%" style={{ stopColor: '#22d3ee' }} />
                                            <stop offset="100%" style={{ stopColor: '#67e8f9' }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.logoUnderline}></div>
                        </div>
                    </div>
                </NavLink>
                {/* Nav Links */}
                <ul className={styles.navLinks}>
                    {SECTIONS.map((section) => (
                        <li key={section} className={styles.navItem}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? styles.active : ''}
                                onClick={(e) => handleNavClick(e, section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Contact Button */}
                <div className={styles.navAction}>
                    <button
                        className={styles.contactBtn}
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        <span>Contact Me</span>
                        <div className={styles.btnGlow}></div>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
