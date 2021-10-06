import React, { useState } from 'react';
import { MilasImage, ParentsWritings, ImageModal } from '..';
import { container, imageBtn, btnIcon, elementsDiv } from './styles.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export const DayDisplay = ({ selectedDay, changeDay }) => {
  const [modalImage, setModalImage] = useState(null);
  const image = getImage(selectedDay.frontmatter.hero_image);
  return (
    <div className={container}>
      {/* {modalImage && (
        <ImageModal setModalImage={setModalImage} image={modalImage} />
      )} */}
      <span className={imageBtn} onClick={() => changeDay(-1)}>
        <FaArrowCircleLeft className={btnIcon} />
      </span>
      <MilasImage
        setModalImage={setModalImage}
        thisImage={selectedDay.frontmatter.hero_image}
      />
      <ParentsWritings
        date={selectedDay.frontmatter.date}
        thisText={selectedDay.body}
      />
      <span
        className={imageBtn}
        onClick={() => {
          changeDay(1);
        }}
      >
        <FaArrowCircleRight className={btnIcon} />
      </span>
    </div>
  );
};
