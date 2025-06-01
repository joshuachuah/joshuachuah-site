import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Contact.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App; 