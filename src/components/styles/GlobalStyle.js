import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--clr-primary);
  }

  :root {
    /* Font Sizes */

    --fs-h1: 2rem;
    --fs-h3: 1.5rem;
    --fs-body: 0.90rem;

    @media (min-width: 580px) {
      --fs-h1: 2.5rem;
      --fs-h3: 2rem;
      --fs-body: 1.125rem;
    }

    /* Font Weights */

    --fw-reg: 400;
    --fw-med: 500;
    --fw-bold: 700;

    /* Colors */

    --clr-accent: #F55A5A;
    --clr-primary: #f5f5f5;
    --clr-body: #2B283A;
    --clr-light: #918E9B;
  }

  img {
    max-width: 100%;
  }

  /* Typography */

  h1 {
    font-size: var(--fs-h1);
    font-weight: var(--fw-med);
  }
`;
