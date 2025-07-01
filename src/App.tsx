import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="content pt-[60px]">
          <Hero />
          <About />
          <Experience />
          <Projects />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App; 