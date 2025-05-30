import React, { useState } from 'react';
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
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
    image: '/images/music notes.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with features like product search, cart management, and secure payment processing.',
    image: '/images/music notes.jpg',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com'
  },
  {
    title: 'Project Three',
    description: 'A social media dashboard with analytics, user management, and content moderation features.',
    image: '/images/music notes.jpg',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Apollo'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com'
  }
];

const aboutImages = [
  {
    src: '/images/GIDLE.JPG',
    alt: 'Working on a project',
    description: 'Collaborating with team members on a full-stack development project'
  },
  {
    src: '/images/GIDLE.JPG',
    alt: 'Coding session',
    description: 'Deep focus during an intense coding session'
  },
  {
    src: '/images/GIDLE.JPG',
    alt: 'Team meeting',
    description: 'Leading a technical discussion with the development team'
  }
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const total = aboutImages.length;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <div className="about-page">
      {/* About Me Section */}
      <section className="about-me-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>What I'm Currently Doing</h3>
              <p>
                I'm a passionate full-stack developer currently focused on building modern web applications
                using React and Node.js. I love creating intuitive user interfaces and robust backend systems
                that solve real-world problems.
              </p>
              <h3>Technologies I Work With</h3>
              <div className="tech-stack">
                {skills.map((skill) => (
                  <div key={skill.name} className="tech-item">
                    <FontAwesomeIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-slider-container">
              <div className="about-slider">
                <button className="about-slider-arrow left" onClick={prevSlide} aria-label="Previous image">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="about-slider-image-wrapper">
                  <img src={aboutImages[current].src} alt={aboutImages[current].alt} className="about-slider-image" />
                  <div className="about-slider-desc">{aboutImages[current].description}</div>
                </div>
                <button className="about-slider-arrow right" onClick={nextSlide} aria-label="Next image">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="about-slider-dots">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`about-slider-dot${idx === current ? ' active' : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Here are some of my recent works
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="project-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;