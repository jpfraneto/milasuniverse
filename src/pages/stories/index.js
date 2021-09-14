import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, StoryContainer } from '../../components';
import '../../styles/global.css';
import './stories.css';

const StoriesPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='The stories'>
        <div className='storiescontainer'>
          {data.allMdx.nodes.map(node => (
            <div>
              <StoryContainer node={node} />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "Story" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          date
          language
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default StoriesPage;
