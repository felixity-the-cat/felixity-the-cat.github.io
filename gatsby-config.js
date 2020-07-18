/**
 * Cf.: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://felixity-the-cat.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felixity's Website`,
        short_name: `@felixity_the_cat`,
        description: `Home of your favorite IG purrsonality.`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/F.svg`,
        icon_options: {
          purpose: `maskable`,
        },
        background_color: `#fff`,
        theme_color: `#046a38`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-postcss`,
  ],
}
