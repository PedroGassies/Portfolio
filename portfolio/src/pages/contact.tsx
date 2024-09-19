import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Balise from "../components/Balise/Balise"
import Titre from "../components/Title/Title"
import React from 'react';
import styles from "../styles/contact.module.css"
import Form from '../components/Form/Form';
import SEO from "../components/SEO/SEO";


const ContactPage: React.FC = () => {
    return (
        <div className={styles.contact}>
            <SEO title="Contacter Pedro Gassies" description="Utilisez ce formulaire pour contacter Pedro Gassies, ou envoyez-lui un email directement."/>
            <Header mainColor="#52796F"
            secondaryColor="#CAD2C5"/>
        <main className={styles.body}>
            <div className={styles.width}>
            <Balise className={styles.titre} textColor='#52796f' backgroundColor='#CAD2C5' content='<contact>'></Balise>
            <div className={styles.phrases}>
            <Titre titre="Faisons quelque chose d'incroyable ensemble" />
            <p className={styles.text}>N&apos;hésitez pas à me contacter pour toute demande de renseignements, de collaboration, d&apos;infos complémentaire ou juste pour me dire bonjour par mail ici <a href="mailto:pedrogassies@gmail.com">pedrogassies@gmail.com</a>, ou via ce formulaire.</p>
            </div>
            </div>
            <div className={styles.form}><Form /></div>
        </main>  
        <Footer textColor="#CAD2C5"/> 
        </div>
    );
};

export default ContactPage;