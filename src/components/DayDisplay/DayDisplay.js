import React from 'react';
import { MilasImage, ParentsWritings } from '..';
import { container } from './styles.module.css';

export const DayDisplay = ({ selectedDay }) => {
  return (
    <div className={container}>
      <MilasImage thisImage={selectedDay.frontmatter.hero_image} />
      <ParentsWritings
        date={selectedDay.frontmatter.date}
        thisText={selectedDay.body}
      />
    </div>
  );
};
