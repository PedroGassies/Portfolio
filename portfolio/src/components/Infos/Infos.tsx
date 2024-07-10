import React from 'react';
import styles from './Infos.module.css';
import Balise from '../Balise/Balise';

const Infos = () => {
  return (
    <div className={styles.infos}>
        <h1>Un peu plus sur moi</h1>
        <p>Je suis un web développeur de 24 ans residant sur Paris spécialisé en Front-End. Mes compétences englobent principalement le développement avec React, HTML, CSS et JavaScript. Avide de nouveaux défis, mon objectif est de concevoir des expériences utilisateur intuitives et innovantes. N'hésitez pas à me contacter pour toute demande par mail pedrogassies@gmail.com, ou via la page contact.</p>
      <h2>Compétences</h2>
      <div className={styles.skills}>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='Github'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='HTML'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='CSS'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='TypeScript'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='JavaScript'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='SEO'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='React'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='NodeJS'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='Design Responsive'></Balise>
    </div>
    </div>
  );
};

export default Infos;
