import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="flex space-x-6">
            <a 
              href="http://github.com/joshuachuah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
            </a>
            <a 
              href="https://linkedin.com/in/joshua-chuah00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-2xl" />
            </a>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Joshua Chuah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;