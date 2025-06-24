import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active tab based on scroll position
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 h-[70px] z-[1000] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-sm' 
        : 'bg-white/80 dark:bg-gray-900/80'
    } backdrop-blur-md border-b border-gray-200 dark:border-gray-700`}>
      <div className="max-w-[1200px] mx-auto px-8 h-full flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-2xl font-bold no-underline"
          onClick={(e) => { 
            e.preventDefault(); 
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              scrollToSection('hero');
            }
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-xl shadow-md hover:bg-blue-700 transition-all duration-300">
            JC
          </span>
        </a>
        <ul className="flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="relative"
            >
              <a
                href={`#${link.to}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    scrollToSection(link.to);
                  }
                }}
                className={`px-5 py-2 rounded-md font-medium no-underline inline-block transition-all duration-300 ${
                  activeTab === link.to 
                    ? 'bg-blue-600 text-white dark:bg-blue-500' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <button 
              onClick={toggleTheme} 
              className="bg-none border-none text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer text-xl p-2 transition-all duration-300 flex items-center justify-center ml-8 hover:rotate-12"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 