// components/Projet/ProjectImages.tsx
import React from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProjectImages.module.css';  // Utilise les styles de Projet.module.css ou crée un fichier spécifique si nécessaire

interface ProjectImagesProps {
    images: string[];
    title: string;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ images, title }) => {
    const settings: Settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:true
    }
    return (
        <div className={styles.image}>
            <Slider {...settings}>
            {images.map((image, index) => (
                <Image key={index} src={image} alt={title} width={353} height={184} />
            ))}
            </Slider>
        </div>
    );
};

export default ProjectImages;
