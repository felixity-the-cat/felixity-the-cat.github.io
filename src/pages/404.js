import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import TitleSVG from "../images/felixity_the_cat.svg"

import { Deck, Heading, Nametag, FootingImage } from "../components/layouts"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>You may be lost</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
        <meta name="description" content="404" />
        <meta
          name="keywords"
          content="Felixity,the cat,tuxedo cats,instagram"
        />
      </Helmet>

      <Deck>
        <Heading>
          <picture>
            <img src={TitleSVG} alt="me" />
          </picture>
        </Heading>

        <Nametag>
          You appear lost: shall we head <Link to="/">home</Link>?
        </Nametag>
      </Deck>
    </>
  )
}
