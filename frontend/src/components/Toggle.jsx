import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ isDark, toggleTheme }) => {
  return (
    <div className="theme-toggle-wrapper">
      <button 
        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <FontAwesomeIcon 
          icon={isDark ? faSun : faMoon} 
          className={`icon-${isDark ? 'sun' : 'moon'}`}
        />
      </button>
    </div>
  );
};

export default Toggle;