import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <div className="content">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App; 