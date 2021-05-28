import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Rupture Regular';
    src: url('./fonts/Rupture Regular.otf') format("opentype");;
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Prata', serif;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  h1 {
    font-size: clamp(1.6rem, 2rem + 3vw, 8rem);
  }

  h2 {
    font-size: clamp(1.6rem, 2rem + 1.8vw, 8rem);
  }

  h3 {
    font-size: clamp(1.6rem, 2rem + 1.6vw, 8rem);
  }

  h4 {
    font-size: clamp(1.6rem, 2rem + 1.4vw, 8rem);
  }

  h5 {
    font-size: clamp(1.6rem, 2rem + 1.2vw, 8rem);
  }

  h6 {
    font-size: clamp(1rem, 0.8rem + 0.5vw, 8rem);
  }

  a {
    /* color: ${(props) => props.theme.colors.textPrimary}; */
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }

  section {
    position: relative;
    height: 100vh;
    width: 100%;

    p {
      font-size: clamp(1rem, 1rem + 1.2vw, 5rem);
    }

    header {
    width: 100%;

      h2::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 60px;
        height: 4px;
        background: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

export default GlobalStyles;
