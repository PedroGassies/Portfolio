import styles from "../styles/index.module.css"
import TypeMachine from '../components/TypeMachine/TypeMachine';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import HiddenImages from "../components/HiddenImages/HiddenImages";
import {imageItems} from "../data/ImageData"
import SEO from "../components/SEO/SEO"

const App = () => {
  const firstHalf = imageItems.slice(0, imageItems.length / 2);
  const secondHalf = imageItems.slice(imageItems.length / 2);

  return (
    <div className={styles.index}>
      <SEO title="Pedro Gassies - Portfolio" description="Bienvenue sur la page d'accueil de mon site web."/>
      <Header mainColor="#1C2226"
      secondaryColor="#FFFAF4"/>
        <main className={styles.body}>
            <HiddenImages items={firstHalf} />
            <div className={styles.type}><TypeMachine /></div>
            <HiddenImages items={secondHalf} />
        </main>
        <Footer textColor="#FFFAF4 "/>
    </div>
    
    
  );
};

export default App;

