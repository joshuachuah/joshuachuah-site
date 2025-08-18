import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
// import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
];

const socialLinks = [  
  { href: 'http://github.com/joshuachuah', icon: faGithub, label: 'Github' },
  { href: 'https://linkedin.com/in/joshua-chuah00', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'mailto:jchuah07@gmail.com', icon: faEnvelope, label: 'Email' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => document.getElementById(link.to));
      sections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          setActiveTab(navLinks[index].to);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 h-[60px] z-[1000] transition-all duration-300 bg-white dark:bg-gray-900 shadow-sm`}> 
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Left: Name */}
        <div className="flex items-center">
          <span className="text-gray-900 dark:text-white font-bold text-lg tracking-wide">Joshua Chuah</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(link.to);
                  }}
                  className={`font-medium no-underline transition-colors duration-200 px-2 py-1 text-base text-gray-600 dark:text-gray-300 hover:text-rose-500 ${
                    activeTab === link.to ? 'text-rose-500' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social Icons, Theme Toggle, and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors duration-200 text-lg px-2"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors duration-200 text-lg px-2"
            aria-label="Toggle theme"
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors duration-200 text-lg p-2"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black bg-opacity-50 z-[999] mobile-menu">
          <div className="bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-6">
              {/* Mobile Navigation Links */}
              <ul className="space-y-4 mb-6">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <a
                      href={`#${link.to}`}
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(link.to);
                      }}
                      className={`block font-medium text-lg py-3 px-4 rounded-lg transition-colors duration-200 ${
                        activeTab === link.to 
                          ? 'text-rose-500 bg-rose-50 dark:bg-rose-900/20' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-rose-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors duration-200 text-xl p-2"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 