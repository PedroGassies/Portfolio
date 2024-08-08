
import React from 'react';
import  styles from "../styles/contact.module.css"
import Form from '../components/Form/Form';


const ContactPage: React.FC = () => {
    return (
        <div className={styles.contact}>
        <main><Form /></main>   
        </div>
    );
};

export default ContactPage;