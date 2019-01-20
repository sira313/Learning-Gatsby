const { siteMetadata } = require('./aflasio')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${siteMetadata.title} | ${siteMetadata.description}`,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.primaryColor,
        theme_color: siteMetadata.primaryColor,
        display: `minimal-ui`,
        icon: `src/images/aflasio.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
