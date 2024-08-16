import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

interface HeaderProps {
  textColor?: string;
  menuOpenBackgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  textColor = 'white',
  menuOpenBackgroundColor = '#0f172a',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        menuButtonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const openMenu = () => {
    setIsTransitioning(true);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsTransitioning(true);
    setMenuOpen(false);
  };

  const onTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <nav className={styles.nav} style={{ color: textColor }}>
      <Link href="/" passHref style={{ color: menuOpenBackgroundColor }}>
        PEDRO GASSIES
      </Link>
      <div ref={menuButtonRef} className={styles.menu} onClick={toggleMenu}>
        <span style={{ backgroundColor: menuOpenBackgroundColor }}></span>
        <span style={{ backgroundColor: menuOpenBackgroundColor }}></span>
        <span style={{ backgroundColor: menuOpenBackgroundColor }}></span>
      </div>
      <ul
        ref={menuRef}
        className={menuOpen ? styles.open : styles.closed}
        onTransitionEnd={onTransitionEnd}
        style={{
          backgroundColor: menuOpen || isTransitioning ? menuOpenBackgroundColor : 'transparent',
        }}
      >
        <li>
          <Link href="/projets" passHref>
            PROJETS
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            A PROPOS
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
