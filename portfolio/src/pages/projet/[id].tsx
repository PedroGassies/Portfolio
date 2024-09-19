import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/projet.module.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Projet from '../../components/ProjectCard/ProjectCard'
import projects from "../../data/projects.json";
import Balise from '../../components/Balise/Balise';
import {Project} from "../../data/projectTypes";
import SEO from "../../components/SEO/SEO"

interface ProjectPageProps {
    project: Project;
  }
  
  const ProjetPage: React.FC<ProjectPageProps> = ({ project }) => {
    return (
      <div className={styles.projet}>
        <SEO title={`Projet ${project.title} de Pedro Gassies`} description={`Projet réalisé employant des technologies liées au développement web`}  />

        <Header mainColor="#CAD2C5"
            secondaryColor="#52796F"/>
        <main className={styles.body}>
        <Balise className={styles.titre} textColor='#CAD2C5' backgroundColor='#52796F' content='<projet>' />
          <Projet project={project} />
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