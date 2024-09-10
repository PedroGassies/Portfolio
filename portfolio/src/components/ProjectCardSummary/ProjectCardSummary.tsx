import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../data/projectTypes';
import styles from './ProjectCardSummary.module.css';

interface ProjectSummaryProps {
    project: Project;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project }) => {
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isImageVisible, setIsImageVisible] = useState(false); // État pour gérer la visibilité de l'image
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 1024);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            const rect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const inverseX = (mouseX - rect.width / 2) / 10;
            const inverseY = (mouseY - rect.height / 2) / 10;

            setImagePosition({ x: inverseX, y: inverseY });
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsImageVisible(true); // Affiche l'image au survol uniquement en version bureau
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsImageVisible(false); // Cache l'image lorsque le curseur quitte le titre uniquement en version bureau
        }
    };

    return (
        <Link className={styles.link} href={`/projet/${project.id}`}>
            <div className={styles.card} onMouseMove={handleMouseMove}>
                <div className={styles.details}>
                    <h3 
                        className={styles.title}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {project.title}
                    </h3>
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
                {project.images[0]?.type === 'image' && (
                    <Image
                        src={project.images[0].src}
                        alt={project.title}
                        width={353}
                        height={184}
                        className={styles.image}
                        style={{
                            transform: !isMobile ? `translate(${imagePosition.x}px, ${imagePosition.y}px)` : 'none',
                            opacity: isMobile || isImageVisible ? 1 : 0, // Garde l'image visible en mobile, mais gère l'opacité en bureau
                            transition: 'opacity 0.2s ease, transform 0.2s ease',
                        }}
                    />
                )}
            </div>
        </Link>
    );
};

export default ProjectSummary;

