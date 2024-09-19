import styles from '../styles/about.module.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Balise from '../components/Balise/Balise';
import Infos from '../components/Infos/Infos';
import SEO from "../components/SEO/SEO";



const AboutPage = () => {
    return (
        <div className={styles.about}>
            <SEO title="À propos de Pedro Gassies" description="Découvrez mon parcours et mes compétences sur cette page." />
            <Header mainColor="#1C2226"
            secondaryColor="#FFFAF4"/>
            <main className={styles.body}>
            <Balise className={styles.titre} textColor='#1C2226' backgroundColor='#CAD2C5' content='<à-propos>'></Balise>
            <Infos />
            </main>
            <Footer textColor="#CAD2C5" />
        </div>
    );
  };
  
  export default AboutPage;