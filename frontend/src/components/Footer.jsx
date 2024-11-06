import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="footer-social">

              <a href="mailto:jchuah07@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/joshuachuah" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/joshua-chuah00/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* add social links here if needed */}
            </div>
            <div className="footer-text">
              <p>© {new Date().getFullYear()} Joshua Chuah. All rights reserved.</p>
              <p>Built with React & ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;