import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

interface HeaderProps {
  mainColor?: string;
  secondaryColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  secondaryColor = 'white',
  mainColor = '#0f172a',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
    setIsClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsTransitioning(true);
    setIsClosing(true);

    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
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
    <header>
    <nav className={styles.nav} style={{ color: isHydrated ? mainColor : undefined }}>
      <Link
        href="/"
        passHref
        style={{
          color: isHydrated ? secondaryColor : undefined,
        }}
      >
        PEDRO GASSIES
      </Link>
      <div ref={menuButtonRef} className={styles.menu} onClick={toggleMenu}>
        <span style={{backgroundColor: secondaryColor }}></span>
        <span style={{backgroundColor: secondaryColor }}></span>
        <span style={{backgroundColor: secondaryColor }}></span>
      </div>
      <ul
        ref={menuRef}
        className={menuOpen && !isClosing ? styles.open : styles.closed}
        style={{backgroundColor: menuOpen || isClosing ? secondaryColor : 'transparent'}}
        onTransitionEnd={onTransitionEnd}
      >
        <li>
          <Link
            href="/projets"
            passHref
            style={{
              color: isHydrated && menuOpen ? mainColor : secondaryColor,
            }}
          >
            PROJETS
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            passHref
            style={{
              color: isHydrated && menuOpen ? mainColor : secondaryColor,
            }}
          >
            À PROPOS
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            passHref
            style={{
              color: isHydrated && menuOpen ? mainColor : secondaryColor,
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
