import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Layout } from '../components';

const About = () => {
  return (
    <main>
      <Layout pageTitle='About'>
        <p>This is the webpage for the cutest girl in the world</p>
        <StaticImage
          src='../images/captura.png'
          alt='Album of the day gathering'
        />
      </Layout>
    </main>
  );
};

export default About;
