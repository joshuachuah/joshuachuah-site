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

const About = () => {
    return (
        <div className="about-page">


        {/* About Section */}
        <section id="about" className="about-section">
            <div className="section-container">
                <h2 className="section-title">About</h2>
                <p className="section-description">
                    Who I am.
                </p>
            </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="skills-section">
            <div className="section-container">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-description">
                Here are the technologies and tools I work with
            </p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="skill-icon">
                    <FontAwesomeIcon icon={skill.icon} />
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-level">
                    <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                    ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                </div>
                ))}
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
}

export default About;