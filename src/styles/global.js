import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
