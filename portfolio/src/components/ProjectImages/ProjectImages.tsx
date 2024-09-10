import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProjectImages.module.css';
import ImageModal from '../Modale/Modal'; 
import { ImageItem } from '../../data/projectTypes'

interface ProjectImagesProps {
  images: ImageItem[]; // Mettez à jour le type ici
  title: string;
  screen:string;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ images, title }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Initialise à null
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Vérifie que `window` est défini
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const settingsBase: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true, // Active le mode centrage
    centerPadding: '0px', // Pas de padding autour des images
  };

  const mobileSettings: Settings = {
    ...settingsBase,
    slidesToShow: 1,
  };

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className={styles.imageContainer}>
      {windowWidth && windowWidth < 768 ? (
        <Slider {...mobileSettings}>
          {images.slice().reverse().map((image, index) =>
            image.type === 'image' ? (
              <div key={index} style={{ textAlign: 'center' }}>
                <Image 
                  src={image.src} 
                  alt={title} 
                  width={353} 
                  height={184} 
                  style={{ margin: '0 auto' }} // Centre l'image dans son conteneur
                />
              </div>
            ) : <video className={styles.videoItem} poster={image.screen} key={index} width="353" height="184" controls loop autoPlay muted>
            <source src={image.src} type="video/mp4" />
            <track
              src={image.src}  
            />
            Your browser does not support the video tag.
          </video>
          )}
        </Slider>
      ) : (
        <div className={styles.imageList}>
          {images.slice().reverse().map((image, index) =>
            image.type === 'image' ? (
              <div
                key={index}
                className={styles.imageItem}
                onClick={() => openModal(image.src)}
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src={image.src} 
                  alt={title} 
                  layout="responsive" 
                  width={275} 
                  height={206} 
                />
              </div>
            ) : <video className={styles.videoItem} poster={image.screen} key={index} width="275" height="206" controls loop autoPlay muted>
            <source src={image.src} type="video/mp4" />
            <track
              src={image.src}  
            />
            Your browser does not support the video tag.
          </video>
          )}
        </div>
      )}
      {modalOpen && currentImage && (
        <ImageModal open={modalOpen} imageSrc={currentImage} imageAlt={title} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectImages;
