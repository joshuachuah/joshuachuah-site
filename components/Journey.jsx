import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <h2>My Journey</h2>
        <div className="journey-grid">
          <div className="journey-item">
            <FontAwesomeIcon icon={faGraduationCap} className="journey-icon" />
            <h4>Education</h4>
            <p>Bachelor of Science in Computer Science</p>
            <p className="subtitle">Western Michigan University, 2024</p>
          </div>

          <div className="journey-item">
            <FontAwesomeIcon icon={faBriefcase} className="journey-icon" />
            <h4>Experience</h4>
            <p>[Your Current/Recent Role]</p>
            <p className="subtitle">[Company Name], [Duration]</p>
          </div>

          <div className="journey-item">
            <FontAwesomeIcon icon={faCode} className="journey-icon" />
            <h4>Focus Areas</h4>
            <p>Full-Stack Development</p>
            <p>Data Analysis & ML</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;