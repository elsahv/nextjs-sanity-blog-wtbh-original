import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

  }

  html {
    // scroll-behavior: smooth;
    line-height: 1.5;
  }
  `



export default GlobalStyles
