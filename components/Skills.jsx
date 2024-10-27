import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faPython,
  faUnity,
  faLinux,
  faDocker,
  faJira,
  faBitbucket,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode,
  faShieldHalved,
  faBug
} from '@fortawesome/free-solid-svg-icons';

// Define the skills data
const skillsData = [
  {
    icon: faReact,
    name: 'React',
    color: '#61DAFB',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    category: 'Frontend'
  },
  {
    icon: faJs,
    name: 'JavaScript',
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.1)',
    category: 'Frontend'
  },
  {
    icon: faHtml5,
    name: 'HTML',
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.1)',
    category: 'Frontend'
  },
  {
    icon: faCss3Alt,
    name: 'CSS',
    color: '#264DE4',
    bgColor: 'rgba(38, 77, 228, 0.1)',
    category: 'Frontend'
  },
  {
    icon: faPython,
    name: 'Python',
    color: '#3776AB',
    bgColor: 'rgba(55, 118, 171, 0.1)',
    category: 'Backend'
  },
  {
    icon: faCode,
    name: 'C#',
    color: '#239120',
    bgColor: 'rgba(35, 145, 32, 0.1)',
    category: 'Languages'
  },
  {
    icon: faDatabase,
    name: 'SQL',
    color: '#336791',
    bgColor: 'rgba(51, 103, 145, 0.1)',
    category: 'Backend'
  },
  {
    icon: faUnity,
    name: 'Unity',
    color: '#000000',
    bgColor: 'rgba(0, 0, 0, 0.1)',
    category: 'Game Dev'
  },
  {
    icon: faLinux,
    name: 'Linux',
    color: '#FCC624',
    bgColor: 'rgba(252, 198, 36, 0.1)',
    category: 'Tools'
  },
  {
    icon: faDocker,
    name: 'Docker',
    color: '#2496ED',
    bgColor: 'rgba(36, 150, 237, 0.1)',
    category: 'Tools'
  },
  {
    icon: faShieldHalved,
    name: 'Burp Suite',
    color: '#FF6633',
    bgColor: 'rgba(255, 102, 51, 0.1)',
    category: 'Security'
  },
  {
    icon: faBug,
    name: 'Metasploit',
    color: '#2A2A2A',
    bgColor: 'rgba(42, 42, 42, 0.1)',
    category: 'Security'
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-tag"
              style={{
                '--skill-color': skill.color,
                '--skill-bg': skill.bgColor
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-content">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;