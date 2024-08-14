import React, { useState } from 'react';
import styles from './Header.module.css';
import HiddenImages from "../HiddenImages/HiddenImages"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500); // Temps pour l'animation de fermeture, doit correspondre à la durée de la transition CSS
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className={styles.header}>
      {/* Symbol Definitions */}
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }}>
        <symbol id="line" viewBox="0 0 150 1">
          <line y1="0.5" x2="150" y2="0.5" stroke="currentColor" strokeWidth="2" />
        </symbol>
        <symbol id="circle" viewBox="0 0 182 182">
          <circle cx="91" cy="91" r="87.5" stroke="currentColor" strokeWidth="4" fill="none" />
        </symbol>
      </svg>

      <div className={styles.container}>
        <div
          className={`${styles.burgerMenuWrapper} ${isOpen ? styles.open : ''} ${isClosing ? styles.closing : ''}`}
          onClick={toggleMenu}
        >
          <svg className={styles.circle}>
            <use xlinkHref="#circle" />
          </svg>
          <svg className={`${styles.line} ${styles.topLine}`}>
            <use xlinkHref="#line" />
          </svg>
          <svg className={`${styles.line} ${styles.middleLine}`}>
            <use xlinkHref="#line" />
          </svg>
          <svg className={`${styles.line} ${styles.bottomLine}`}>
            <use xlinkHref="#line" />
          </svg>
        </div>

        <nav className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem}>Accueil</li>
            <li className={styles.menuItem}>A propos</li>
            <li className={styles.menuItem}>Archives</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

