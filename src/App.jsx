import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro'
import Journey from '../components/Journey';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import './styles.css'; // Your existing CSS file

function App() {
  useScrollAnimation(); // Custom hook for scroll animations

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;