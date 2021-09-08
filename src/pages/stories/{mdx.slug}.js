import * as React from 'react';
import { Layout, StoryDisplay } from '../../components';
import { graphql, navigate } from 'gatsby';

const StoryPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <StoryDisplay data={data} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        date
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default StoryPage;
