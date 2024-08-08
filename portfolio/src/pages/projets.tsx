import React from 'react';
import { GetStaticProps } from 'next';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import projects from '../data/projects.json';
import Balise from "../components/Balise/Balise"
import Footer from "../components/Footer/Footer"
import { Project } from '../data/projectTypes';
import styles from '../styles/projets.module.css';

interface ProjectsPageProps {
    projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
    return (
        <div className={styles.projets}>
            <main>
            <Balise className={styles.titre} textColor='#CAD2C5' backgroundColor='#52796F' content='<archive>'></Balise>
            <ProjectsList projects={projects} />
            </main>
            <Footer textColor='#52796F'/>
            
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            projects,
        },
    };
};

export default ProjectsPage;
