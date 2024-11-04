import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro'
import Journey from '../components/Journey';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import { useEffect } from 'react';

function App() {
  const elementRef = useScrollAnimation();

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optional: Clean up when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div ref={elementRef} className="scroll-animation">
      <Intro />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;