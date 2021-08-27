import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../../components';

const StoriesPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='The stories'>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/stories/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
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
          title
        }
        id
        slug
      }
    }
  }
`;

export default StoriesPage;
