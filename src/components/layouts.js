import React from "react"
import styled from "styled-components"
import Fonts from "./fonts"

export const Deck = styled.div`
  align-items: center;
  align-content: center;
  margin: 1rem auto;
  columns: 1;
  width: 90%;
  max-width: 500px;
  display: block;
  font-family: "Billabong";
`

export const Heading = styled.header`
  width: 40%;
  margin: 0 auto 0 40%;
`

export const Nametag = styled.main`
  width: 70%;
  margin: 3rem auto;
`

export const Footing = styled.footer`
  display: flex;
  justify-content: flex-end;
  * {
    text-align: right;
    font-size: 1.3rem;
  }
  a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    :hover {
      font-weight: bolder;
      text-decoration: none;
    }
  }
`
