import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Project } from '../../data/projectTypes';
import styles from './ProjectCardSummary.module.scss';

interface ProjectSummaryProps {
    project: Project;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project }) => {
    return (
        <Link href={`/projet/${project.id}`}>
        <div className={styles.card}>
            <div className={styles.details}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.infos}>
                    <div className={styles.skills}>
                        {project.skills.map((skill) => (
                            <p key={skill.name} className={styles.skill}>
                                {skill.name}
                            </p>
                        ))}      
                    </div> 
                    <p className={styles.year}>{project.year}</p>
                </div>      
            </div>
            <Image src={project.images[0]} alt={project.title} width={320} height={184} className={styles.image} />
        </div>
        </Link>
    );
};

export default ProjectSummary;
