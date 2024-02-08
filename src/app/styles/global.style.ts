import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    display: block;
    width: 100vw;
    height: 100vh;
    line-height: 1;
    overflow: hidden;
    overflow-y: auto;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
    ::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    font-size: 10px;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: var(--font-noto);
  }

`;
