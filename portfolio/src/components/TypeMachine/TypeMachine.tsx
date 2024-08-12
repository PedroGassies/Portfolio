import Typing from 'react-typing-effect';
import styles from './TypeMachine.module.css';


const TypeMachine= ( )=>{
    const textContent="Bienvenue sur mon site! Je suis Pedro, développeur front-end, basé sur Paris."
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
        </div>
       )
}
export default TypeMachine;