import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Fonts from "../components/fonts"
import TitleSVG from "../images/felixity_the_cat.svg"

import { Deck, Heading, Nametag, Footing } from "../components/layouts"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Felixity's site</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
        <meta name="description" content="Felxity the Cat's home page" />
        <meta
          name="keywords"
          content="Felixity,the cat,tuxedo cats,instagram"
        />

        <meta property="og:title" content="Felixity the Cat's purrsonal site" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={TitleSVG} />
        <meta property="og:url" content="https://felixity-the-cat.github.io" />
        <meta
          property="og:description"
          content="Home page of your favorite Instagram purrsonality, @felixity_the_cat"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FelixityTheCat" />
        <meta name="twitter:creator" content="@burkh4rt" />
        <meta
          name="twitter:title"
          content="Felixity the Cat's purrsonal site"
        />
        <meta
          name="twitter:description"
          content="Home page of your favorite Twitter purrsonality, @FelixityTheCat"
        />
        <meta property="twitter:image" content={TitleSVG} />
        <meta name="twitter:dnt" content="on" />
        <link rel="me" href="https://twitter.com/FelixityTheCat" />

        <script type="application/ld+json">
          {`
              {
              "@context": "http://schema.org/",
              "@type": "Person",
              "name": "Felixity",
              "additionalName": "the Cat",
              "birthPlace": {
                "@type": "Place",
                "address": {
                  "addressLocality": "San José",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                  }
                },
              "gender": "http://schema.org/Female",
              "givenName": "Felixity",
              "knowsAbout": "cat stuff",
              "nationality": "US",
              "relatedTo": {
                "@type": "Person",
                "name": "Michael C. Burkhart",
                "sameAs": "https://burkh4rt.github.io"
                },
              "sameAs": [
                "https://felixity-the-cat.github.io",
                "https://www.instagram.com/felixity_the_cat",
                "https://twitter.com/FelixityTheCat"
                ]
              }
          `}
        </script>
      </Helmet>
      <body>
        <Fonts />

        <Deck>
          <Heading>
            <picture>
              <img src={TitleSVG} alt="me" />
            </picture>
          </Heading>

          <Nametag>
            <a
              href="https://www.instagram.com/felixity_the_cat"
              target="_blank"
              rel="noopener"
            >
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Felixity the cat"
              />
            </a>
          </Nametag>

          <Footing>
            <a href="https://burkh4rt.github.io" target="_blank" rel="noopener">
              <p>© Michael C. Burkhart, {data.site.year}</p>
            </a>
          </Footing>
        </Deck>
      </body>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "combined_content.png" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 85
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          formats: [AUTO, WEBP, AVIF]
          transformOptions: { fit: INSIDE, cropFocus: ATTENTION }
        )
      }
    }
    site {
      year: buildTime(formatString: "YYYY")
    }
  }
`
