import * as React from 'react';
import { navigate } from 'gatsby';
import { btn } from './styles.module.css';

export const Button = ({ text }) => {
  return (
    <button
      className={btn}
      onClick={() => {
        navigate(-1);
      }}
    >
      Go Backkkk
    </button>
  );
};
