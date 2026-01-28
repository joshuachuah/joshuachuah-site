'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  time: string;
}

const Navigation = ({ time }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 flex items-center justify-between">
          <a href="#" className="text-xs tracking-wider text-text-dim uppercase">
            Joshua Chuah
          </a>
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Desktop Navigation */}
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-wider text-text-light hover:text-text-primary transition-colors duration-700 uppercase hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
              >
                {item.label}
              </a>
            ))}
            <span className="text-xs tracking-widest text-text-faint font-light hidden xs:inline">{time}</span>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 -mr-2 text-text-dim hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-cream/95 backdrop-blur-md sm:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-8 p-8"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl tracking-wider text-text-secondary hover:text-text-primary transition-colors uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.span
                className="text-sm tracking-widest text-text-faint font-light mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {time}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;