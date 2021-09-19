import * as React from 'react';
import { Layout, About } from '../components';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Bienvenid@'>
        <About />
      </Layout>
    </main>
  );
};

export default AboutPage;
