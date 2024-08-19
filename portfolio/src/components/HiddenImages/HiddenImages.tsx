import React, { useState, useEffect } from 'react';
import styles from './HiddenImages.module.css';

interface TypeToggleImageProps {
  items: {
    buttonText: string;
    imageSrc: string;
    buttonClassName: string;
    imageClassName: string;
  }[];
}

const HiddenImages: React.FC<TypeToggleImageProps> = ({ items }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const isMobile = window.innerWidth < 768; // Détecter si on est sur un mobile

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    if (!isMobile) { // Ne se déclenche que sur bureau
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) * 0.7; // Ajuster le facteur de déplacement
      const offsetY = (e.clientY - rect.top) * 0.7; // Ajuster le facteur de déplacement
      setImagePosition({ x: -offsetX, y: -offsetY });
      setVisibleIndex(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) { // Ne se déclenche que sur bureau
      setVisibleIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) { // Ne se déclenche que sur bureau
      setVisibleIndex(null);
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) { // Ne se déclenche que sur mobile
      setVisibleIndex(visibleIndex === index ? null : index); // Toggle visibility
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleIndex(null); // Réinitialiser l'état lors du redimensionnement de la fenêtre
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <button
            className={`${styles.toggleButton} ${styles[item.buttonClassName]}`}
            onClick={() => handleClick(index)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.buttonText}
          </button>
          {visibleIndex === index && (
            <img
              src={`${item.imageSrc}`}
              alt={`Image ${index + 1}`}
              className={`${styles.image} ${styles[item.imageClassName]}`}
              style={{
                transform: !isMobile ? `translate(${imagePosition.x}px, ${imagePosition.y}px)` : 'none',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HiddenImages;
