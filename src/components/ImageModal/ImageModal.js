import React from 'react';
import { modalImage } from './styles.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ImageModal = ({ image, setModalImage }) => {
  return (
    <GatsbyImage
      className={modalImage}
      onClick={() => {
        setModalImage(null);
      }}
      alt='Foto de la Mila'
      image={image}
    />
  );
};
