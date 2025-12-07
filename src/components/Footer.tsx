import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'http://github.com/joshuachuah', icon: faGithub, label: 'Github' },
  { href: 'https://linkedin.com/in/joshua-chuah00', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'mailto:jchuah07@gmail.com', icon: faEnvelope, label: 'Email' }
];

const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t-2 border-theme-sage/30 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-theme-tan transition-colors duration-500 text-xl sm:text-2xl px-2"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Joshua Chuah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;