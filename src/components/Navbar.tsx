import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const location = useLocation();

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
    const activeIndex = navLinks.findIndex(link =>
      link.exact ? location.pathname === link.to : location.pathname.startsWith(link.to)
    );
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
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-circle">JC</span>
        </NavLink>
        <ul className="nav-links" style={{ position: 'relative' }}>
          {/* Animated highlight rectangle */}
          <div className="nav-highlight" style={highlightStyle} />
          {navLinks.map((link, idx) => (
            <li
              key={link.to}
              ref={el => (navRefs.current[idx] = el)}
            >
              <NavLink
                to={link.to}
                end={link.exact}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
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