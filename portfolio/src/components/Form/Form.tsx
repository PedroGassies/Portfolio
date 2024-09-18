import React, { FormEvent, useState, useRef } from 'react';
import styles from './Form.module.css';
import FlipLink from '../FlipLink/FlipLink';

const Form: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    if (!formRef.current) {
      setResult("Form reference is null.");
      return;
    }

    const formData = new FormData(formRef.current);

    formData.append("access_key", "8b0d1989-9836-4aab-8464-7dea1369f4db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        formRef.current.reset(); // Réinitialiser le formulaire après soumission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section className={styles.form}>
      <form className={styles.formulaire} onSubmit={onSubmit} ref={formRef}>
        <div className={styles['input-box']}>
          <input
            type="text"
            className={styles.field}
            placeholder='NOM PRÉNOM'
            name='name'
            required
          />
        </div>
        <div className={styles['input-box']}>
          <input
            type="email"
            className={styles.field}
            placeholder='ADRESSE MAIL'
            name='email'
            required
          />
        </div>
        <div className={styles['input-box']}>
          <textarea
            className={`${styles.field} ${styles.mess}`}
            placeholder="ECRIRE UN MESSAGE"
            name='message'
            required
          ></textarea>
        </div>
        <button className={styles.send}type="submit"><FlipLink target="" href="">ENVOYER</FlipLink>    <picture><img src='./assets/arrow.png' alt="send"></img> </picture></button>
        {result && <p>{result}</p>}
      </form>
    </section>
  );
};

export default Form;