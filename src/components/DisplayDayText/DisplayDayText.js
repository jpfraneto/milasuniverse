import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { dayText } from './styles.module.css';

export const DisplayDayText = ({ fontSize, text }) => {
  return (
    <div style={{ fontSize: fontSize }} className={dayText}>
      <MDXRenderer>{text}</MDXRenderer>
    </div>
  );
};
