import React from 'react';
import Image from 'next/image';
import { Skills } from '../../../data/projectTypes';
import styles from './Competences.module.css';

interface CompetencesProps {
    skills: Skills[];
}

const Competences: React.FC<CompetencesProps> = ({ skills }) => {
    return (
        <div className={styles.competences}>
            <h3>Compétences</h3>
            <ul className={styles.list}>
                {skills.map((skill) => (
                    <li key={skill.name} className={styles.skill}>
                        <Image src={skill.logo} alt={skill.name} width={50} height={50} />
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Competences;
