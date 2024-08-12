import React, { useState } from 'react';
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

  const handleClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <button 
            className={`${styles.toggleButton} ${item.buttonClassName}`} 
            onClick={() => handleClick(index)}
          >
            {visibleIndex === index ? 'Cacher Image' : item.buttonText}
          </button>
          {visibleIndex === index && (
            <img 
              src={item.imageSrc} 
              alt={`Image ${index + 1}`} 
              className={`${styles.image} ${item.imageClassName}`} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HiddenImages;
