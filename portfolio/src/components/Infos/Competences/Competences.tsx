import React from 'react';
import styles from './Competences.module.css';
interface CompetencesProps {
  textColor: string;
  backgroundColor:string;
  content: string;
}

const Balise: React.FC<CompetencesProps> = ({ textColor, backgroundColor, content }) => {
  return (
    <p className={styles.balise} style={{ color: textColor , backgroundColor: backgroundColor}}>
    {content}
    </p>
  );
};

export default Balise;