import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faRProject
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faChartLine, 
  faBrain,
  faCode,
  faShieldAlt,
  faBug
} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  // Frontend
  { icon: faReact, name: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
  { icon: faJs, name: 'JavaScript', color: '#F7DF1E', bgColor: 'rgba(247, 223, 30, 0.1)' },
  { icon: faHtml5, name: 'HTML', color: '#E34F26', bgColor: 'rgba(227, 79, 38, 0.1)' },
  { icon: faCss3Alt, name: 'CSS', color: '#264DE4', bgColor: 'rgba(38, 77, 228, 0.1)' },
  { icon: faBootstrap, name: 'Bootstrap', color: '#7952B3', bgColor: 'rgba(121, 82, 179, 0.1)' },
  
  // Programming Languages
  { icon: faPython, name: 'Python', color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.1)' },
  { icon: faCode, name: 'C', color: '#A8B9CC', bgColor: 'rgba(168, 185, 204, 0.1)' },
  { icon: faCode, name: 'C#', color: '#239120', bgColor: 'rgba(35, 145, 32, 0.1)' },
  { icon: faRProject, name: 'R', color: '#276DC3', bgColor: 'rgba(39, 109, 195, 0.1)' },
  
  // Tools & Technologies
  { icon: faLinux, name: 'Linux', color: '#FCC624', bgColor: 'rgba(252, 198, 36, 0.1)' },
  { icon: faDocker, name: 'Docker', color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.1)' },
  { icon: faBitbucket, name: 'Bitbucket', color: '#0052CC', bgColor: 'rgba(0, 82, 204, 0.1)' },
  { icon: faJira, name: 'Jira', color: '#0052CC', bgColor: 'rgba(0, 82, 204, 0.1)' },
  
  // Data & ML
  { icon: faDatabase, name: 'SQL', color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)' },
  { icon: faBrain, name: 'Scikit-learn', color: '#F7931E', bgColor: 'rgba(247, 147, 30, 0.1)' },
  { icon: faChartLine, name: 'Data Analysis', color: '#4CAF50', bgColor: 'rgba(76, 175, 80, 0.1)' },
  
  // Security Tools
  { icon: faShieldAlt, name: 'Burp Suite', color: '#FF6633', bgColor: 'rgba(255, 102, 51, 0.1)' },
  { icon: faBug, name: 'Metasploit', color: '#2A2A2A', bgColor: 'rgba(42, 42, 42, 0.1)' },
  
  // Game Development
  { icon: faUnity, name: 'Unity', color: '#222C37', bgColor: 'rgba(0, 0, 0, 0.1)' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skillsData.map((skill, index) => (
            <li 
              key={index} 
              className="skill-item"
              style={{ 
                color: skill.color,
                backgroundColor: skill.bgColor,
                borderLeft: `4px solid ${skill.color}`
              }}
            >
              {Array.isArray(skill.icon) ? (
                skill.icon.map((icon, i) => (
                  <FontAwesomeIcon key={i} icon={icon} style={{ marginRight: '5px' }} />
                ))
              ) : (
                <FontAwesomeIcon icon={skill.icon} />
              )}
              {' '}{skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;