import React, { useState } from 'react';
import styles from './HiddenImages.module.css';
import Image from 'next/image'

interface TypeToggleImageProps {
  items: {
    buttonText: string;
    imageSrc: string;
    buttonClassName: string;
    imageClassName: string;
  }[];
}
//useref vers le texte add/remove caractere pipe 0.5s
const HiddenImages: React.FC<TypeToggleImageProps> = ({ items }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Toggle visibility
  };
  return (
    <div>
      {items.map((item, index) => ( //slice length/2 
        <div key={index} className={styles.wrapper}>
          <button 
            className={`${styles.toggleButton} ${styles[item.buttonClassName]}`} 
            onClick={() => handleClick(index)}
          >
            {item.buttonText}
          </button>
          {visibleIndex === index && (
            <img
              src={`${item.imageSrc}`} 
              alt={`Image ${index + 1}`} 
              className={`${styles.image} ${styles[item.imageClassName]}`} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HiddenImages;
