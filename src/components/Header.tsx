import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <button
            className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                A propos de moi
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Compétences
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projets
              </a>
            </li>
            <li>
              <a href="#formation" onClick={closeMenu}>
                Formation
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </nav>
    </header>
  );
}

export default Header;
