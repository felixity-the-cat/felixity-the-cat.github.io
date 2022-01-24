import { createGlobalStyle } from "styled-components"

import BillabongWoff2 from "../fonts/Billabong.woff2"
import BillabongWoff from "../fonts/Billabong.woff"
import BillabongOtf from "../fonts/Billabong.otf"

const Fonts = createGlobalStyle`
    @font-face {
      font-family: "Billabong";
      src: url(${BillabongWoff2}) format("woff2"),
      url(${BillabongWoff}) format("woff"),
      url(${BillabongOtf}) format("opentype");
      font-style: normal;
      font-weight: normal;
      font-feature-settings: "kern" 1, "onum" 1;
      unicode-range: U+000-5FF, U+261C; /* Latin glyphs */
      font-display: block;
    }
`

export default Fonts
