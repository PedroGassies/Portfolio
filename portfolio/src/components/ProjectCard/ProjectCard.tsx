import React from 'react';
import styles from './ProjectCard.module.css';
import Balise from '../Balise/Balise';
import Titre from '../Title/Title';
import Competences from "../Infos/Competences/Competences"
import ProjectImages from '../ProjectImages/ProjectImages'; 
import { Project } from '../../data/projectTypes';

interface ProjetProps {
    project: Project;
}

const Projet: React.FC<ProjetProps> = ({ project }) => {
    return (
            <div className={styles.projet}>
                <Balise className={styles.titre} textColor='#CAD2C5' backgroundColor='#52796F' content='<projet>' />
                <Titre titre={project.title} />
                <div className={styles.datas}>
                <p>{project.description}</p>
                <div>
                <Competences skills={project.skills}/>
                <div className={styles.links}>
                    <a href={project.websiteLink}>VOIR LE SITE <picture><img src='../../../assets/greenarrow.png' alt=""></img> </picture></a>
                    <a href={project.githubLink}>VOIR LE REPOS GITHUB <picture><img src='../../../assets/greenarrow.png' alt=""></img> </picture></a>
                </div>
                </div>
                </div>
                <ProjectImages images={project.images} title={project.title} />
            </div>
    );
};

export default Projet;
