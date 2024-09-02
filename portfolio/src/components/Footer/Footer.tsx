import React from 'react';
import styles from './Footer.module.css';
interface FooterProps {
  textColor: string; 
}

const Footer: React.FC<FooterProps> = ({ textColor }) => {
  return (
    <footer className={styles.footer} style={{ color: textColor }}>
      © 2024 Pedro Gassies, Tous droits réservés.
    </footer>
  );
};

export default Footer;

//création state pour passer aux enfants un prop qui change la couleur 