import React from 'react';
import styles from './Balise.module.css';

interface BaliseProps {
  textColor: string;
  backgroundColor: string;
  content: string;
  className?: string; 
}

const Balise: React.FC<BaliseProps> = ({ textColor, backgroundColor, content, className }) => {
  return (
    <div
      className={`${styles.balise} ${className}`}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {content}
    </div>
  );
};

export default Balise;
