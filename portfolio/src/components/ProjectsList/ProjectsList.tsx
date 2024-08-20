import React from 'react';
import ProjectSummary from '../ProjectCardSummary/ProjectCardSummary';
import { Project } from '../../data/projectTypes';
import styles from './ProjectsList.module.css';

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PROJETS</h1>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <ProjectSummary key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
