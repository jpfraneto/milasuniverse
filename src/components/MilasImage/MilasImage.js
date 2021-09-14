import React from 'react';
import { fotoMila } from './styles.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const MilasImage = ({ thisImage }) => {
  const image = getImage(thisImage);
  return <GatsbyImage className={fotoMila} image={image} />;
};
