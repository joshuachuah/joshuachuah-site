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
  },
  {
    icon: faJira,
    name: 'Jira',
    color: '#0052CC',
    bgColor: 'rgba(0, 82, 204, 0.1)',
    category: 'Tools'
  },
  {
    icon: faBitbucket,
    name: 'Bitbucket',
    color: '#2684FF',
    bgColor: 'rgba(38, 132, 255, 0.1)',
    category: 'Tools'
  },
  {
    icon: faBootstrap,
    name: 'Bootstrap',
    color: '#7952B3',
    bgColor: 'rgba(121, 82, 179, 0.1)',
    category: 'Frontend'
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const totalSkills = skillsData.length;
  
  const calculatePosition = (index) => {
    const angle = (360 / totalSkills) * index;
    return {
      '--skill-bg': skillsData[index].bgColor,
      '--skill-color': skillsData[index].color,
      transform: `rotate(${angle}deg) translateX(250px)`,
      animationDelay: `${-(index * (30 / totalSkills))}s`
    };
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-orbit-container">
          <div className="center-skill" 
               style={{
                 background: hoveredSkill !== null ? 
                   skillsData[hoveredSkill].bgColor : 
                   'transparent'
               }}>
            {hoveredSkill !== null && (
              <div className="center-content">
                <FontAwesomeIcon 
                  icon={skillsData[hoveredSkill].icon}
                  className="center-icon"
                  style={{ color: skillsData[hoveredSkill].color }}
                />
                <span className="center-skill-name" style={{ color: skillsData[hoveredSkill].color }}>
                  {skillsData[hoveredSkill].name}
                </span>
              </div>
            )}
          </div>

          <div className="orbit-path">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="skill-tag"
                style={calculatePosition(index)}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-content">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="skill-icon"
                    style={{ 
                      color: skill.color,
                      transform: `scale(${hoveredSkill === index ? 1.2 : 1})`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
