import * as React from 'react';
import { Layout, About } from '../components';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Bienvenid@'>
        <About text={'Bienvenidos a nuestro hogar digital!'} />
      </Layout>
    </main>
  );
};

export default AboutPage;
