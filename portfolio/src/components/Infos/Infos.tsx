import React from 'react';
import Image from 'next/image'
import styles from './Infos.module.css';
import Balise from '../Balise/Balise';
import Titre from "../Title/Title"
import FlipLink  from '../FlipLink/FlipLink';

const Infos = () => {
  return (
    <div className={styles.infos}>
        <div className={styles.presentation}></div>
        <Titre titre={"QUI JE SUIS"}></Titre>
        <p>Je suis un web développeur de 24 ans résidant sur Paris spécialisé en Front-End. Mes compétences englobent principalement le développement avec React, HTML, CSS et JavaScript. Avide de nouveaux défis, mon objectif est de concevoir des expériences utilisateur intuitives et innovantes. N&apos;hésitez pas à me contacter pour toute demande par mail <a href="mailto:pedrogassies@gmail.com">pedrogassies@gmail.com</a>, ou via la page <a href='/contact'>contact</a>.</p>
      <div className={styles.competences}>
      <h2>Compétences</h2>
      <div className={styles.global}>
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
    <picture className={styles.me}>
      <Image
        src="/assets/PedroGassies.jpg"
        alt="Pedro Gassies"
        width={169}
        height={250}
      />
      </picture>
      <div className={styles.links}>
      <FlipLink href="/projets" target="_blank">
        PROJETS
        
      </FlipLink>
      <FlipLink href="./assets/CV.pdf" target="_blank" >
        CV

      </FlipLink>
      <FlipLink href="https://www.linkedin.com/in/pedro-gassies-1a1681194/" target="_blank" >
        LINKEDIN

      </FlipLink>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Infos;
