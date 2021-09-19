import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Navbar } from '..';
import { container, outerDiv } from './styles.module.css';
import '../../styles/global.css';

export const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={outerDiv}>
      <Navbar />
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <main>{children}</main>
      </div>
    </div>
  );
};
