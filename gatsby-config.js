module.exports = {
  siteMetadata: {
    siteUrl: `https://sellyourlistings.ca`,
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
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin/*`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://sellyourlistings.ca",
        sitemap: "https://sellyourlistings.ca/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/" },
          { userAgent: "*", disallow: "/admin/" },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176843902-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/admin/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
