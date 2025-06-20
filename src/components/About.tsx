import React from 'react';
import { motion } from 'motion/react';
import profilePicture from '../../images/test3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PhotoGallery } from './PhotoGallery';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs, 
  faPython,
  faWebflow,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import { 
  faGraduationCap, 
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

const skills = [
  {
    name: 'Webflow',
    icon: faWebflow,
    level: 85,
    color: '#146EF5'
  },
  {
    name: 'React',
    icon: faReact,
    level: 85,
    color: '#61DAFB'
  },
  {
    name: 'CSS3',
    icon: faCss3Alt,
    level: 85,
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    icon: faJs,
    level: 90,
    color: '#F7DF1E'
  },
  {
    name: 'Node.js',
    icon: faNodeJs,
    level: 80,
    color: '#339933'
  },
  {
    name: 'Python',
    icon: faPython,
    level: 75,
    color: '#3776AB'
  },
  {
    name: 'HTML5',
    icon: faHtml5,
    level: 90,
    color: '#E34F26'
  },
  {
    name: 'Docker',
    icon: faDocker,
    level: 70,
    color: '#2496ED'
  }
];

const timeline = [
  {
    year: '2023',
    title: 'Web Developer',
    description: 'Working on modern web applications and improving user experience',
    icon: faLaptopCode
  },
  {
    year: '2023',
    title: 'Computer Science Graduate',
    description: 'Completed degree with focus on web development and cybersecurity',
    icon: faGraduationCap
  }
];

const hobbies = [
  {
    name: 'Cybersecurity',
    description: 'Learning how people track down and decypher malware',
    info: 'John Hammond 🐐',
    color: "purple"
  },
  {
    name: 'Music',
    description: "I cannot function without music",
    info: 'IU, LE SSERAFIM, Sasha Sloan',
    color: 'green'
  },
  {
    name: 'Learning',
    description: "Been interested in the Korean language since 2021 and I want to get fluent in it",
    info: 'Beginner level',
    color: 'orange'
  },
  {
    name: 'Mechanical Keyboards',
    description: "Expensive hobby and will also be the #1 reason why I'm broke",
    info: '4 custom keyboards',
    color: 'blue'
  }
];

const About = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-black py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white mb-8">
            About
          </h1>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            Who I am.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-32">
          {/* Photo Gallery Section */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I am currently a Web Developer at ONTRAC Marketing, working on building scalable websites for clients.
              </p>
            </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <PhotoGallery isMobile={isMobile} />
          </motion.div>


          {/* Experience Section */}
          <h3 className="text-xl font-bold text-black dark:text-white">Timeline</h3>
          <div className="relative min-h-[20vh] pl-6">
            <div className="absolute left-1 top-[-20px] bottom-[-28px] w-0.5 bg-gray-300 dark:bg-gray-700" />
              <div className="space-y-4 mb-8">
                {[
                  {
                    company: "ONTRAC Marketing",
                    date: "2025 - Present",
                    title: "Web Designer / Developer",
                    description: ["working on designing and developing scalable websites."],
                    dotColor: "bg-blue-500"
                  },
                  {
                    company: "Stealth Startup",
                    date: "2024 - 2024",
                    title: "Web Developer Intern",
                    description: ["{find title description here}"],
                    dotColor: "bg-green-500"
                  },
                  {
                    company: "Western Michigan University, MI",
                    date: "2021 - 2024",
                    title: "B.S. Computer Science",
                    description: ["got my degree to make my parents proud"],
                    dotColor: "bg-amber-800"
                  },
                ].map((item) => (
                  <div key={item.company + item.date} className="relative">
                    <div 
                      className={`absolute left-[-22px] top-[24px] w-[13px] h-[13px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
                    />
                    <motion.div
                      className="group py-1 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      style={{ transformOrigin: 'left' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <p className="font-medium text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.company}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-xl font-bold text-black dark:text-white">Here Are Some of The Technologies That I Work With</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div 
                      className="w-full aspect-square bg-white dark:bg-gray-900 rounded-xl shadow-sm flex flex-col items-center justify-center space-y-4 p-6 transition-transform hover:shadow-md hover:scale-105"
                    >
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className="text-4xl"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-base text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>

          {/* hobbies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-xl font-bold text-black dark:text-white">Hobbies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.name}
                  whileHover={{ scale: 1.10 }}
                  className="flex flex-col items-start"
                >
                  <div className="font-semibold text-lg text-black mt-1 dark:text-white">{hobby.name}</div>
                  <p className="text-base text-gray-500 mt-2 dark:text-gray-300">{hobby.description}</p>
                  <p className={`text-sm text-${hobby.color}-500 mt-3`}>{hobby.info}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;