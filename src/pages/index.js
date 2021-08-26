import * as React from 'react';
import { Layout } from '../components';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby tutorial</p>
      <StaticImage
        src='https://images.unsplash.com/photo-1503584815950-223185a0e8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80'
        alt='The lunatic is on the grass'
      />
    </Layout>
  );
};

export default IndexPage;
