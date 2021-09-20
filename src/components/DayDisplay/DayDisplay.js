import React, { useState } from 'react';
import { MilasImage, ParentsWritings, ImageModal } from '..';
import { container, imageBtn, btnIcon } from './styles.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export const DayDisplay = ({ selectedDay, changeDay }) => {
  const [modalImage, setModalImage] = useState(null);
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
