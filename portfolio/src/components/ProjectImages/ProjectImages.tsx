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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  // Définir les paramètres du carousel en fonction de la largeur de l'écran
  const getSliderSettings = (): Settings => {
    if (windowWidth < 768) {
      return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      };
    } else if (windowWidth >= 768 && windowWidth <= 1024) {
      return {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
      };
    } else {
      return {
        // Paramètres pour écrans plus larges (> 1024px) - désactivation du carousel
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
      };
    }
  };

  return (
    <div className={styles.imageContainer}>
      {windowWidth < 1024 ? (
        <Slider {...getSliderSettings()}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <Image src={image} alt={title} layout="responsive" width={windowWidth < 768 ? 353 : 275} height={windowWidth < 768 ? 184 : 206} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.imageList}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageItem} onClick={() => openModal(image)} style={{ cursor: 'pointer' }}>
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



