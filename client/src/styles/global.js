import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size-md: 1.5rem;
    --font-size-base: 1rem;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-red: #eb2f06;
    --color-orange: #e67e22;
    --color-yellow: #f1c40f;
    --color-green: #2ecc71;
    --color-blue: #0984e3;
    --color-skyBlue: #75a4f5;
    --color-navy: #000080;
    --color-purple: #6c5ce7;
    --color-mint: #00d2d3;
    --color-pink: #e84393;
    --color-lightGray: #dfe6e9;
    --color-gray: #b2bec3;
    --color-fontGray: #6b6b6b;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    line-height: 1;
  }
  ul,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    :hover {
      text-decoration: none;
      color: black;
    }
  }
`

export default GlobalStyle;