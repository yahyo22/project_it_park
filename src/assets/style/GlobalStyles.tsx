import { createGlobalStyle } from "styled-components";

import "./font.css";
import "./icons.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    .container{
        width:calc(100vw - 161px) ;
        margin: 0 auto;
    }
`;
