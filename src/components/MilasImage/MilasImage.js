import React from 'react';
import { fotoMila } from './styles.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const MilasImage = ({ thisImage, setModalImage }) => {
  const image = getImage(thisImage);
  return (
    <GatsbyImage
      onClick={() => {
        setModalImage(image);
      }}
      alt='Foto de la Mila'
      className={fotoMila}
      image={image}
    />
  );
};
