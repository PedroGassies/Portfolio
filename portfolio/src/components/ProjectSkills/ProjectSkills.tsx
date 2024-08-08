// components/Projet/ProjectSkills.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../ProjectCard/ProjectCard.module.css';  // Utilise les styles de Projet.module.css ou crée un fichier spécifique si nécessaire
import { Skills } from '../../data/projectTypes';

interface ProjectSkillsProps {
    skills: Skills[];
}

const ProjectSkills: React.FC<ProjectSkillsProps> = ({ skills }) => {
    return (
        <div>
            <h3>Skills</h3>
            <ul className={styles.skillsList}>
                {skills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                        <Image src={skill.logo} alt={skill.name} width={50} height={50} />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectSkills;
