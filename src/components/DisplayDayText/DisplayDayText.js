import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { dayText } from './styles.module.css';

export const DisplayDayText = ({ text }) => {
  return (
    <div className={dayText}>
      <MDXRenderer>{text}</MDXRenderer>
    </div>
  );
};
