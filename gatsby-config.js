module.exports = {
  siteMetadata: {
    title: `HackCarleton`,
    description: `Landing Page for HackCarleton`,
    author: `Varun Sindwani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HackCarleton`,
        short_name: `HackCarleton`,
        start_url: `/`,
        background_color: `#6c63ff`,
        theme_color: `#6c63ff`,
        display: `minimal-ui`,
        icon: `src/assets/icons/terminal.png`,
      }, 
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
