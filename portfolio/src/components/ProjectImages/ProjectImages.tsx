import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProjectImages.module.css';
import ImageModal from '../Modale/Modal'; // Assurez-vous que le chemin est correct

interface ProjectImagesProps {
  images: string[];
  title: string;
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
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <Image 
              src={image} 
              alt={title} 
              width={353} 
              height={184} 
              style={{ margin: '0 auto' }} // Centre l'image dans son conteneur
            />
          </div>
        ))}
      </Slider>
      ) : (
        <div className={styles.imageList}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.imageItem}
              onClick={() => openModal(image)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={image} alt={title} layout="responsive" width={275} height={206} />
            </div>
          ))}
        </div>
      )}
      {modalOpen && currentImage && (
        <ImageModal open={modalOpen} imageSrc={currentImage} imageAlt={title} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectImages;
