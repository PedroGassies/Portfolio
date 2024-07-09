import React, { useEffect } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  useEffect(() => {
    const burger = document.querySelector(`.${styles.burger}`) as HTMLElement | null;
    const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement | null;
    const navLinks = document.querySelectorAll(`.${styles.navLink}`);

    const handleBurgerClick = () => {
      if (burger && navbar) {
        burger.classList.toggle(styles.burgerOpen);
        navbar.classList.toggle(styles.navOpen);
        navLinks.forEach((link: Element) => {
          link.classList.toggle(styles.navLinkOpen);
        });
      }
    };

    if (burger) {
      burger.addEventListener('click', handleBurgerClick);
    }

    return () => {
      if (burger) {
        burger.removeEventListener('click', handleBurgerClick);
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.burger} burger`}>
        <i className="fas fa-bars fa-2x"></i>
        <i className="fas fa-times fa-2x"></i>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}><a href="#">Home</a></li>
          <li className={styles.navLink}><a href="#">Blog</a></li>
          <li className={styles.navLink}><a href="#">Gallery</a></li>
          <li className={styles.navLink}><a href="#">About</a></li>
          <li className={styles.navLink}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
