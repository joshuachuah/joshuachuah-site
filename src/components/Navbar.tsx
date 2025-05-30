import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Animate highlight rectangle
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.to));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const activeIndex = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
      });

      const activeRef = navRefs.current[activeIndex];
      if (activeRef) {
        const rect = activeRef.getBoundingClientRect();
        const parentRect = activeRef.parentElement?.getBoundingClientRect();
        setHighlightStyle({
          left: rect.left - (parentRect?.left || 0),
          top: rect.top - (parentRect?.top || 0),
          width: rect.width,
          height: rect.height,
          opacity: 1,
        });
      } else {
        setHighlightStyle({ opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <span className="logo-circle">JC</span>
        </a>
        <ul className="nav-links" style={{ position: 'relative' }}>
          {/* Animated highlight rectangle */}
          <div className="nav-highlight" style={highlightStyle} />
          {navLinks.map((link, idx) => (
            <li
              key={link.to}
              ref={el => (navRefs.current[idx] = el)}
            >
              <a
                href={`#${link.to}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.to);
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 