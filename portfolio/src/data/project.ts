export interface Skills{
    name:string,
    logo:string
}

export interface Project{
    id:number,
    title:string,
    description:string,
    skills:Skills[],
    websiteLink :string,
    githubLink:string,
    images:string[]
}

export const projects: Project[]= [
    {
        id:1,
        title: "Booki",
        description:`Ce projet a été fait dans le cadre de ma formation Développeur web chez OpenClassrooms. Le projet Booki est un projet de création d'une interface web pour une agence de voyage.
        Il implique la découpe et l'intégration d'une maquette Figma en utilisant HTML et CSS.
        L'objectif principal est de rendre le site responsive et compatible avec différents appareils et résolutions d'écran.`,
        skills:[
            {name:"HTML",logo:"/assets/logo/html.png"},
            {name:"CSS", logo:"/assets/logo/css.png"}
        ],
        websiteLink:"",
        githubLink:"https://github.com/PedroGassies/Projet_Deux_Gassies_Pedro.git",
        images:["/assets/mockup.jpg","/assets/mockup.jpg","/assets/mockup.jpg"]
    },
    {
        id:2,
        title: "Sophie Bluel",
        description:`Ce projet a été fait dans le cadre de ma formation Développeur web chez OpenClassrooms. Dans ce projet de développement Front-End, j'ai travaillé sur la création d'un site portfolio pour une architecte d'intérieur. J'ai mis en place une galerie dynamique en utilisant une API pour récupérer les données des projets et j'ai implémenté des filtres pour trier les projets par catégorie. J'ai également développé la page de connexion de l'administrateur avec un système d'authentification via un formulaire, ainsi qu'une modale permettant l'ajout et la suppression de projets de manière dynamique. J'ai veillé à assurer le bon fonctionnement de l'ensemble du projet en traitant les erreurs dans les formulaires.`,
        skills:[
            {name:"JavaScript",logo:"/assets/logo/javascript.png"},
        ],
        websiteLink:"",
        githubLink:"https://github.com/PedroGassies/Sophie-Bluel.git",
        images:["/assets/mockup.jpg","/assets/mockup.jpg","/assets/mockup.jpg"]
    },
    {
        id:3,
        title: "Kasa",
        description:`Ce projet a été fait dans le cadre de ma formation Développeur web chez OpenClassrooms. Le projet Kasa est une refonte d'un site web de location immobilière développé en utilisant React. Avec une interface front-end moderne et fluide, l'application offre une expérience utilisateur optimale. En exploitant les composants React et avec react router, l'application permet de naviguer entre diverses pages, notamment la page d'accueil, la galerie des annonces et la page détaillée des propriétés. En développant ce projet, j'ai également mis en place des animations et utilisé SASS pour une conception CSS avancée.`,
        skills:[
            {name:"React",logo:"/assets/logo/react.png"},
            {name:"JavaScript", logo:"/assets/logo/javascript.png"},
            {name:"SASS", logo:"/assets/logo/sass.png"}
        ],
        websiteLink:"",
        githubLink:"https://github.com/PedroGassies/Kasa.git",
        images:["/assets/mockup.jpg","/assets/mockup.jpg","/assets/mockup.jpg"]
    },
    {
        id:4,
        title: "Mon Vieux Grimoire",
        description:`Ce projet a été fait dans le cadre de ma formation Développeur web chez OpenClassrooms. Mon Vieux Grimoire est une application web permettant aux utilisateurs de rechercher, ajouter et noter des livres. J'ai été responsable de la mise en place du serveur, de la gestion de la base de données et de l'authentification des utilisateurs.
        J'ai également optimisé l'envoi des images des utilisateurs pour garantir des performances optimales tout en respectant les principes du Green Code, avec aussi l'ajout de protection de données.`,
        skills:[
            {name:"Node.js",logo:"/assets/logo/nodejs.png"},
            {name:"Express", logo:"/assets/logo/express.png"}
        ],
        websiteLink:"",
        githubLink:"https://github.com/PedroGassies/MonVieuxGrimoire.git",
        images:["/assets/mockup.jpg","/assets/mockup.jpg","/assets/mockup.jpg"]
    },
];

export default projects;