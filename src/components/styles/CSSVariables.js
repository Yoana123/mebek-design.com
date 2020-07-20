import React from "react"
import { createGlobalStyle } from "styled-components"

const CSSVariables = createGlobalStyle`
  :root {

    --color-white: #fff;
    --color-black: #000;

    --background-color: var(--color-white);
    --text-color: var(--color-black);

    --font-family-primary: Arial;
    --font-family-secondary: Georgia;

    --font-size-1: 12px;
    --font-size-2: 14px;
    --font-size-3: 16px;
    --font-size-4: 20px;
    --font-size-5: 24px;
    --font-size-6: 36px;
    --font-size-7: 48px;
    --font-size-8: 72px;

    --font-size-default: var(--font-size-3);

    --line-height-body: 1.5;
    --line-height-heading: 1.25;
    --line-height-navigation: 1.5;
  }
`

export default React.memo(CSSVariables)
