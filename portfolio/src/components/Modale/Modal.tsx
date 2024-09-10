import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import styles from './Modal.module.css'



interface ImageModalProps {
  open: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, imageSrc, imageAlt, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <Image src={imageSrc} alt={imageAlt} style={{ objectFit: 'cover' }} width={600} height={450} />
      </Box>
    </Modal>
  );
};

export default ImageModal;
