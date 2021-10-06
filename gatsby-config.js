require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Hola Mila',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cuarentena`,
        path: `${__dirname}/src/content/cuarentena`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bienvenida Mila',
        short_name: 'Bienvenida Mila',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
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
