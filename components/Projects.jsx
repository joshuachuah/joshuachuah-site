import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    title: "Unofficial Website for G(I)-DLE",
    description: "An unofficial website that I made for the K-Pop girl group G(I)-DLE.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/joshuachuah/unofficial-website",
    // liveLink: "https://gidle-website.com",
    image: "images/GIDLE.JPG" // Add your project image path
  },
  {
    title: "NBA Predictor App",
    description: "Developed an app for analyzing NBA datasets to predict player performance using Python.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Django"],
    githubLink: "https://github.com/joshuachuah/StatsPicksNBA",
    // liveLink: "https://nba-predictor.com",
    image: "images/NBA Logo.png" // Add your project image path
  },
  {
    title: "Broken Song",
    description: "A program that traverses through a directory tree looking for pieces of an mp3.",
    technologies: ["C"],
    githubLink: "https://github.com/joshuachuah/Broken-Song",
    // liveLink: "https://nba-predictor.com",
    image: "images/music notes.jpg" // Add your project image path
  },
  {
    title: "Hearthstone Card Parser",
    description: "A program that parses a .csv file full of Hearthstone card data. It will also de-duplicate, sort and then nicely print out the cards.",
    technologies: ["C"],
    githubLink: "https://github.com/joshuachuah/hearthstone-parser",
    // liveLink: "https://nba-predictor.com",
    image: "images/Hearthstone.jpg" // Add your project image path
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card scroll-animation">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;