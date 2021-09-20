import React, { useState } from 'react';
import { DisplayDayText } from '..';
import {
  mainDiv,
  textContainer,
  topContainer,
  textSizer,
  fontSizeBtn,
  fontSizeText,
} from './styles.module.css';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';

export const ParentsWritings = ({ date, thisText }) => {
  const [fontSize, setFontSize] = useState('2rem');
  const changeFontSize = diff => {
    let presentSize = fontSize;
    let number = +presentSize.replace('rem', '');
    let newNumber = number + diff;
    let newSize = newNumber + 'rem';
    setFontSize(newSize);
  };
  return (
    <div className={mainDiv}>
      <div className={topContainer}>
        <div>{date}</div>
      </div>
      <div className={textContainer}>
        <div className={textSizer}>
          <span
            onClick={() => {
              changeFontSize(-0.5);
            }}
            className={fontSizeBtn}
          >
            <HiMinusCircle />
          </span>
          <h3 className={fontSizeText}>Tamaño Letra</h3>
          <span
            onClick={() => {
              changeFontSize(0.5);
            }}
            className={fontSizeBtn}
          >
            <HiPlusCircle />
          </span>
        </div>

        <DisplayDayText fontSize={fontSize} text={thisText} />
      </div>
    </div>
  );
};
