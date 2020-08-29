module.exports = {
  siteMetadata: {
    title: `Sell Your Listings`,
    description: `3D dollhouse, drone and interior videos, property photos and social media management. We offer the most affordable prices to help real estate agents. The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau.`,
    author: `@tomkonidas`,
    og_image: `https://sellyourlistings/sellyourlistings.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sell Your Listings`,
        short_name: `Sell Your Listings`,
        start_url: `/`,
        background_color: `#F54F4F`,
        theme_color: `#F54F4F`,
        display: `minimal-ui`,
        icon: `src/images/sellyourlistings-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
