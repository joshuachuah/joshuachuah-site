import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faPython 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faChartLine, 
  faBrain 
} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  { icon: faReact, name: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
  { icon: faJs, name: 'JavaScript', color: '#F7DF1E', bgColor: 'rgba(247, 223, 30, 0.1)' },
  { 
    icon: faHtml5, 
    name: 'HTML', 
    color: '#E34F26', // HTML orange
    bgColor: 'rgba(227, 79, 38, 0.1)' 
  },
  { 
    icon: faCss3Alt, 
    name: 'CSS', 
    color: '#264DE4', // CSS blue
    bgColor: 'rgba(38, 77, 228, 0.1)' 
  },
  { icon: faPython, name: 'Python', color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.1)' },
  { icon: faDatabase, name: 'SQL', color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)' },
  { icon: faChartLine, name: 'Data Analysis', color: '#4CAF50', bgColor: 'rgba(76, 175, 80, 0.1)' },
  { icon: faBrain, name: 'Machine Learning', color: '#9C27B0', bgColor: 'rgba(156, 39, 176, 0.1)' }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
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