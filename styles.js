import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, h1 {
    margin: auto;
    text-align: center;
    width: 550px;
    font-family: system-ui;
  }
`;
