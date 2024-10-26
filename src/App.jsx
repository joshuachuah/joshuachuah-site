import Skills from '../components/Skills';
import Projects from '../components/Projects';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './styles.css'; // Your existing CSS file

function App() {
  useScrollAnimation(); // Custom hook for scroll animations

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Joshua Chuah</h1>
          <p>Full-Stack Developer | Data Analyst | Tech Enthusiast</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </header>

      <Skills />
      <Projects />

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;