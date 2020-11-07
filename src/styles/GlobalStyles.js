import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background: var(--main-color);
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --main-color: #f3f3f3;
    --secondary-color: #344A5E;
    --text-color: #1B1B1B;

    --success-color: #03AF53;
    --warning-color: #F7B61F;
    --error-color: #FA617B;
  }
`;
