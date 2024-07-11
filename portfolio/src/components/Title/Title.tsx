import styles from '../Title/Title.module.css'

interface TitreProps{
    titre: string;
}


const Titre: React.FC<TitreProps> = ({ titre }) => {
    return (
        <h1 className={styles.title}> {titre}</h1>
    );
  };
  
  export default Titre;