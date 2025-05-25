import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
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

const Skills = () => {
  return (
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
  );
};

export default Skills; 