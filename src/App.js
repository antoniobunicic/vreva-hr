import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import logo from './assets/logo.svg';

function App() {
  const { t } = useTranslation('common');
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'services', 'approach', 'contact'];
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
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Vreva" />
          </div>
          <div className="nav-right">
            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <li>
                <button
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => scrollToSection('about')}
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => scrollToSection('projects')}
                >
                  {t('nav.projects')}
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'services' ? 'active' : ''}
                  onClick={() => scrollToSection('services')}
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'approach' ? 'active' : ''}
                  onClick={() => scrollToSection('approach')}
                >
                  {t('nav.approach')}
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => scrollToSection('contact')}
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
            <LanguageSwitcher />
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label={t('nav.ariaToggleMenu')}>
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Approach />
        <Contact />
      </main>

      <footer className="footer">
        <p>{t('footer.copyright')} </p>
      </footer>
    </div>
  );
}

export default App;
