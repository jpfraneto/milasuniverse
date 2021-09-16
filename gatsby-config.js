require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Mila's Universe",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cuarentena`,
        path: `${__dirname}/src/content/cuarentena`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
