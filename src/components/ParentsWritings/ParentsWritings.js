import React, { useState } from 'react';
import { DisplayDayText } from '..';
import {
  mainDiv,
  textContainer,
  topContainer,
  NachasDiv,
  JPSDiv,
} from './styles.module.css';

export const ParentsWritings = ({ date, thisText }) => {
  const [text, setText] = useState(null);
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
