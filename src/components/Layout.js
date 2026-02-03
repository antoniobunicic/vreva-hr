import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.svg';

const dropdownServices = [
  { key: 'webdev', slug: 'web-development' },
  { key: 'fullstack', slug: 'software-development' },
  { key: 'leadership', slug: 'it-consulting' },
];

function Layout() {
  const { t } = useTranslation(['common', 'services']);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Scroll to top on route change (not hash changes on homepage)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Track active section on homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

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
  }, [isHomePage]);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { id: 'about', label: t('nav.about', { ns: 'common' }) },
    { id: 'projects', label: t('nav.projects', { ns: 'common' }) },
    { id: 'services', label: t('nav.services', { ns: 'common' }), hasDropdown: true },
    { id: 'approach', label: t('nav.approach', { ns: 'common' }) },
    { id: 'contact', label: t('nav.contact', { ns: 'common' }) },
  ];

  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Vreva" />
          </Link>
          <div className="nav-right">
            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.id} className={item.hasDropdown ? 'nav-item-dropdown' : ''}>
                  <button
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                    {item.hasDropdown && <span className="nav-dropdown-arrow">&#9662;</span>}
                  </button>
                  {item.hasDropdown && (
                    <ul className="nav-dropdown">
                      {dropdownServices.map((svc) => (
                        <li key={svc.key}>
                          <Link
                            to={`/services/${svc.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(`dropdown.${svc.key}`, { ns: 'services' })}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label={t('nav.ariaToggleMenu', { ns: 'common' })}>
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
        <Outlet />
      </main>

      <footer className="footer">
        <p>{t('footer.copyright', { ns: 'common' })}</p>
      </footer>
    </div>
  );
}

export default Layout;
