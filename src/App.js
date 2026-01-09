import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">Antonio Buničić</div>
          <ul className="nav-menu">
            <li>
              <button
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={() => scrollToSection('hero')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p>&copy; 2026 Antonio Buničić. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
