import * as React from 'react';
import { Layout } from '../../components';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Dia a Dia'>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
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
      filter: { frontmatter: { type: { eq: "BlogPost" } } }
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

export default BlogPage;
