import React, { useState } from 'react';
import { MilasImage, ParentsWritings, ImageModal } from '..';
import { container } from './styles.module.css';

export const DayDisplay = ({ selectedDay }) => {
  const [modalImage, setModalImage] = useState(null);
  return (
    <div className={container}>
      {/* {modalImage && (
        <ImageModal setModalImage={setModalImage} image={modalImage} />
      )} */}
      <MilasImage
        setModalImage={setModalImage}
        thisImage={selectedDay.frontmatter.hero_image}
      />
      <ParentsWritings
        date={selectedDay.frontmatter.date}
        thisText={selectedDay.body}
      />
    </div>
  );
};
