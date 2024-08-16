import Typing from 'react-typing-effect';
import styles from './TypeMachine.module.css';


const TypeMachine= ( )=>{
    const textContent="Bienvenue sur mon site!"
    return(
        <div>
          <Typing
            text={[textContent]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            className={styles.TyppingEffect}
          />
          <p className={styles.TyppingEffect}>Je suis Pedro, développeur front-end, basé sur Paris.</p>
        </div>
       )
}
export default TypeMachine;