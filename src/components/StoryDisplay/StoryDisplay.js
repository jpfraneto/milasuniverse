import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import { Button } from '..';
import {
  storyTextContainer,
  storyHeroImage,
  storyContainerDiv,
  storyAuthor,
} from './styles.module.css';

export const StoryDisplay = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <div className={storyContainerDiv}>
      <h2 className={storyAuthor}>
        Written by {data.mdx.frontmatter.author} - Published in{' '}
        {data.mdx.frontmatter.date}
      </h2>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        className={storyHeroImage}
      />
      <div className={storyTextContainer}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <Button
        text='Go Back'
        worker={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};
