import styles from "../styles/index.module.css"
import TypeMachine from '../components/TypeMachine/TypeMachine';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import HiddenImages from "../components/HiddenImages/HiddenImages";
import {imageItems} from "../data/ImageData"

const App = () => {
    
  return (
    <div className={styles.index}>
      <Header />
        <main className={styles.body}>
            <div className={styles.type}><TypeMachine /></div>
            <HiddenImages items={imageItems} />
        </main>
        <Footer textColor="#FFFAF4 "/>
    </div>
    
    
  );
};

export default App;

