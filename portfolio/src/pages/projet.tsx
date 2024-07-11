import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../styles/projet.module.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Balise from '../components/Balise/Balise';
import Titre from '../components/Title/Title';
import projects from "../data/project";
import {Project} from "../data/project";

interface ProjectPageProps {
    project: Project;
  }
  
  const ProjetPage: React.FC<ProjectPageProps> = ({ project }) => {
    return (
      <div className={styles.projet}>
        <main>
          <Titre titre={project.title} />
          <Balise className={styles.titre} textColor='#CAD2C5' backgroundColor='#52796F' content='<projet>' />
          <p>{project.description}</p>
        </main>
        <Footer textColor="#52796F" />
      </div>
    );
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((project) => ({
      params: { id: project.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = projects.find((p) => p.id.toString() === params?.id);
  
    return {
      props: {
        project: project || null,
      },
    };
  };
  
  export default ProjetPage;