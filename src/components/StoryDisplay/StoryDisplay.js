import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Button } from '..';
import {
  storyTextContainer,
  storyHeroImage,
  storyContainerDiv,
} from './styles.module.css';

export const StoryDisplay = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <div className={storyContainerDiv}>
      <h1>Written by {data.mdx.frontmatter.author}</h1>
      <p>Published in {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        className={storyHeroImage}
      />
      <div className={storyTextContainer}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <Button text='Go Backkkkk' />
    </div>
  );
};
