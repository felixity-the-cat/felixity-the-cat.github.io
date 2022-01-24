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

    @font-face {
      font-family: 'Grand Hotel';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/grandhotel/v11/7Au7p_IgjDKdCRWuR1azplQKGFws0VEw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

`

export default Fonts
