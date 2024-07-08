import React from 'react';

interface FooterProps {
  textColor: string; 
}

const Footer: React.FC<FooterProps> = ({ textColor }) => {
  return (
    <footer style={{ color: textColor }}>
      © 2024 Pedro Gassies, Tous droits réservés.
    </footer>
  );
};

export default Footer;
