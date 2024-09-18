import React from 'react';
import styles from './AnimatedLink.module.css';

interface AnimatedLinkProps {
  backgroundColor: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ backgroundColor }) => {
  return (
    <div
      className={styles.animatedLink}
      style={{ '--bg-color': backgroundColor } as React.CSSProperties}
    >
      {/* Outline animation spans */}
      <span className={styles.top}></span>
      <span className={styles.right}></span>
      <span className={styles.bottom}></span>
      <span className={styles.left}></span>
    </div>
  );
};

export default AnimatedLink;
