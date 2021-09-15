import * as React from 'react';
import { Layout, About } from '../components';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Bienvenid@'>
        <About text={data.mdx.body} />
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    mdx(frontmatter: { type: { eq: "AboutText" } }) {
      body
    }
  }
`;

export default AboutPage;
