import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html, body {
    min-height: 100%;
  }

  html {
    background: var(--background-color);
    color: var(--text-color);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-default);
    line-height: var(--line-height-body);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-secondary);
    line-height: var(--line-height-heading);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .fs-1 {
    font-size: var(--font-size-1);
  }

  .fs-2 {
    font-size: var(--font-size-2);
  }

  .fs-3 {
    font-size: var(--font-size-3);
  }

  .fs-4 {
    font-size: var(--font-size-4);
  }

  .fs-5 {
    font-size: var(--font-size-5);
  }

  .relative {
    position: relative;
  }
`

export default React.memo(GlobalStyles)
