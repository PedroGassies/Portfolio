import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Titre from "../components/Title/Title"
import React from 'react';
import  styles from "../styles/contact.module.css"
import Form from '../components/Form/Form';


const ContactPage: React.FC = () => {
    return (
        <div className={styles.contact}>
            <Header mainColor="#52796F"
            secondaryColor="#CAD2C5"/>
        <main className={styles.body}>
            <div className={styles.phrases}>
            <Titre titre="Faisons quelque chose d'incroyable ensemble" />
            <p className={styles.text}>N'hésitez pas à me contacter pour toute demande de renseignements, de collaboration, d'infos complémentaire ou juste pour me dire bonjour par mail ici <a href="mailto:pedrogassies@gmail.com">pedrogassies@gmail.com</a>, ou via ce formulaire.</p>
            </div>
            <div className={styles.form}><Form /></div>
        </main>  
        <Footer textColor="#CAD2C5"/> 
        </div>
    );
};

export default ContactPage;