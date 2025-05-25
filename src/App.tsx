import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Contact.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Joshua Chuah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 