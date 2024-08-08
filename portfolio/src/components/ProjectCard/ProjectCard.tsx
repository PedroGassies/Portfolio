import React from 'react';
import styles from './ProjectCard.module.css';
import Balise from '../Balise/Balise';
import Titre from '../Title/Title';
import ProjectImages from '../ProjectImages/ProjectImages'; 
import { Project } from '../../data/projectTypes';

interface ProjetProps {
    project: Project;
}

const Projet: React.FC<ProjetProps> = ({ project }) => {
    return (
            <div>
                <Balise className={styles.titre} textColor='#CAD2C5' backgroundColor='#52796F' content='<projet>' />
                <Titre titre={project.title} />
                <p>{project.description}</p>
                <div>
                    <a href={project.websiteLink}>Website</a>
                    <a href={project.githubLink}>GitHub</a>
                </div>
                <ProjectImages images={project.images} title={project.title} />
            </div>
    );
};

export default Projet;
