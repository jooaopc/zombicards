import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #080200;
    --white: #e9e3d7;
    --red: #af4b46;
    --orange: #b36b44;
    --yellow: #d9b258;
    --blue: #5fa3cd;

    --text-body: #969cb3;
    --background: #171923;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--background);
    color: var(--text-body);

    @media(max-width: 1080px){
      font-size: 93.75%
    }

    @media(max-width: 720px){
      font-size: 87.5%
    }
  }

  body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
