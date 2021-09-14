import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  storyContainerClass,
  storyImage,
  storyTitle,
} from './styles.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const StoryContainer = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image);
  return (
    <Link to={`/stories/${node.slug}`}>
      <article className={storyContainerClass} key={node.id}>
        <h2 className={storyTitle}>
          {node.frontmatter.title}{' '}
          {node.frontmatter.language === 'spanish' ? '🇪🇸' : '🇬🇧'}
        </h2>
        <GatsbyImage className={storyImage} image={image} alt='Wena compare' />
      </article>
    </Link>
  );
};
