import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

svg, img {
    max-width: 100%;
}

html, body {
    height: 100%;
    margin: 0;
    font-size: 12px;
    font-family: 'Nunito', sans-serif;;
    font-feature-settings: "kern";
    -webkit-font-kerning: normal;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6, input, select, textarea {
    font-family: 'Nunito', sans-serif;;
    font-weight: normal;
}

    .grid{
        width: 100%
    }

`;