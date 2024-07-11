import React from 'react';
import styles from './Infos.module.css';
import Balise from '../Balise/Balise';

const Infos = () => {
  return (
    <div className={styles.infos}>
        <div className={styles.presentation}></div>
        <h1>Un peu plus sur moi</h1>
        <p>Je suis un web développeur de 24 ans residant sur Paris spécialisé en Front-End. Mes compétences englobent principalement le développement avec React, HTML, CSS et JavaScript. Avide de nouveaux défis, mon objectif est de concevoir des expériences utilisateur intuitives et innovantes. N'hésitez pas à me contacter pour toute demande par mail <a href="mailto:pedrogassies@gmail.com">pedrogassies@gmail.com</a>, ou via la page <a href='/contact'>contact</a>.</p>
      <div className={styles.competences}>
      <h2>Compétences</h2>
      <div className={styles.skills}>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='React'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='TypeScript'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='HTML'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='CSS'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='JavaScript'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='Github'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='SEO'></Balise>
      <Balise className={styles.balise} textColor='#CAD2C5' backgroundColor='#354F52' content='NodeJS'></Balise>
      <Balise className={styles.balise} textColor='#354F52' backgroundColor='#CAD2C5' content='Design Responsive'></Balise>
    </div>
    </div>
    <div className={styles.links}>
      <picture className={styles.me}>
      <img
        src="./assets/PedroGassies.jpg"
        alt="Pedro Gassies"
        width={147}
        height={191}
      />
      </picture>
    <a href="">VOIR MES PROJETS    -></a>
    <a href="">CV -></a>
    <a href="">EMAIL -></a>
    <a href="">LINKEDIN -></a>
    </div>
    </div>
  );
};

export default Infos;
