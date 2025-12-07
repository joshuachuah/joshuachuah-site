import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
  const [activeTab, setActiveTab] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-0 left-0 right-0 h-[60px] z-[1000] transition-all duration-500 bg-white/40 backdrop-blur-md border-b-2 border-theme-sage/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Left: Name */}
        <div className="flex items-center">
          <span className="text-theme-tan font-medium text-lg tracking-wide">Joshua Chuah ☕</span>
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
                  className={`font-light no-underline transition-colors duration-500 px-2 py-1 text-base text-gray-700 hover:text-theme-tan ${
                    activeTab === link.to ? 'text-theme-tan font-medium' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-theme-tan transition-colors duration-500 text-lg px-2"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-theme-tan transition-colors duration-500 text-lg p-2"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black bg-opacity-50 z-[999] mobile-menu">
          <div className="bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-2 border-theme-sage/30">
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
                      className={`block font-light text-lg py-3 px-4 rounded-2xl transition-all duration-500 ${
                        activeTab === link.to
                          ? 'text-theme-tan bg-white/50 border-2 border-theme-tan/40 shadow-[0_8px_30px_rgb(212,163,115,0.15)] font-medium'
                          : 'text-gray-700 hover:text-theme-tan hover:bg-white/30 border-2 border-transparent'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-6 pt-4 border-t-2 border-theme-sage/30">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-theme-tan transition-colors duration-500 text-xl p-2"
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