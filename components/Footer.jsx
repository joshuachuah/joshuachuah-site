import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://github.com/joshuachuah" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/joshua-chuah00/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* Add other social links as needed */}
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