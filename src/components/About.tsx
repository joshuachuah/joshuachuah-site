import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs, 
  faPython,
  faGitAlt,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css';

const skills = [
  {
    name: 'HTML5',
    icon: faHtml5,
    level: 90
  },
  {
    name: 'CSS3',
    icon: faCss3Alt,
    level: 85
  },
  {
    name: 'JavaScript',
    icon: faJs,
    level: 90
  },
  {
    name: 'React',
    icon: faReact,
    level: 85
  },
  {
    name: 'Node.js',
    icon: faNodeJs,
    level: 80
  },
  {
    name: 'Python',
    icon: faPython,
    level: 75
  },
  {
    name: 'Git',
    icon: faGitAlt,
    level: 85
  },
  {
    name: 'Docker',
    icon: faDocker,
    level: 70
  }
];

const aboutImages = [
  {
    src: '/images/profile picture.jpg',
    alt: 'Working on a project',
  },
];

const infoOne = (
  <p>
    I am a recent computer science graduate and I'm currently working as a Web Developer focused on building modern web pages for companies. I am
    interested in creating smooth webpages that improves user experience.
  </p>
)

const infoTwo = (
  <p>
    Outside of work, I get up to date with the latest malware in cybersecurity. I also love
    listening to music, and playing games.
  </p>
)

const About = () => {
  return (
    <div className="about-page">
      <section className="about-me-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>What I'm Currently Doing</h3>
              {infoOne}

              <h3>Technologies I Work With</h3>

              <div className="tech-stack">
                {skills.map((skill) => (
                  <div key={skill.name} className="tech-item">
                    <FontAwesomeIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

              {infoTwo}
            </div>
            <div className="about-slider-container">
              <div className="about-slider-image-wrapper">
                  <img
                    src={aboutImages[0].src}
                    alt={aboutImages[0].alt}
                    className="about-slider-image"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;