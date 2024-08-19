import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Project } from '../../data/projectTypes';
import styles from './ProjectCardSummary.module.css';

interface ProjectSummaryProps {
    project: Project;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project }) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculer la nouvelle position en sens inverse et à la moitié de la vitesse
        const inverseX = -mouseX / 10;
        const inverseY = -mouseY / 10;

        setPosition({
            x: inverseX,
            y: inverseY,
        });
    };

    return (
        <Link 
            className={styles.link} 
            href={`/projet/${project.id}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >
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
                {hovered && (
                    <div 
                        className={styles.imageContainer} 
                        style={{ 
                            transform: `translate(calc(50% + ${position.x}px), calc(50% + ${position.y}px))` 
                        }}
                    >
                        <Image 
                            src={project.images[0]} 
                            alt={project.title} 
                            width={353} 
                            height={184} 
                            className={styles.image} 
                        />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ProjectSummary;
