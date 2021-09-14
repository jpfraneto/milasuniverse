import * as React from 'react';
import { btn } from './styles.module.css';

export const Button = ({ text, worker }) => {
  return (
    <button className={btn} onClick={worker}>
      {text}
    </button>
  );
};
