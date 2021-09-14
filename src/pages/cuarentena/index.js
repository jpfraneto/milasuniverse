import * as React from 'react';
import { Layout, Cuarentena } from '../../components';
import { Link, graphql } from 'gatsby';

const CuarentenaPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle='Dia a dia de la Mila por 40 dias'>
        <Cuarentena diasDisponibles={data.allMdx.nodes} />
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "ParentStory" } } }) {
      nodes {
        frontmatter {
          date
          day
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        body
      }
    }
  }
`;

export default CuarentenaPage;
