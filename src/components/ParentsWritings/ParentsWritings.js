import React from 'react';
import { DisplayDayText } from '..';
import { mainDiv, textContainer, topContainer } from './styles.module.css';

export const ParentsWritings = ({ date, thisText }) => {
  return (
    <div className={mainDiv}>
      <div className={topContainer}>
        <div>{date}</div>
      </div>
      <div className={textContainer}>
        <DisplayDayText text={thisText} />
      </div>
    </div>
  );
};
