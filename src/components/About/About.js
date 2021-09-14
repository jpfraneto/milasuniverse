import * as React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';
import { aboutDiv, aboutImage, aboutText } from './styles.module.css';
import { Button } from '..';

export const About = ({ text }) => {
  return (
    <div className={aboutDiv}>
      <StaticImage
        src='../../images/10s1.jpeg'
        className={aboutImage}
        alt='The miracle of life'
      />
      <div className={aboutText}>
        <MDXRenderer>{text}</MDXRenderer>
        <Link to='blog'>Ir al dia a dia</Link>
      </div>
    </div>
  );
};
