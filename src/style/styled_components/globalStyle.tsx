// Global style for styled components.
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    --primary: #303f9f;
    --disabled: #bdbdbd;
    --success: #00897B;
    --info: #ffaa00;
    --warning:#c63828;
    --main-dark-2:#102a43;
    --main-dark-1:#829AB1;
    --main: #d9e2ec;
    --main-light-1: #F0f4f8;
    --main-light-2: #f1f1f1;
    --border-radius: 0.25rem;
    font-size: 16px;
  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: 'Mulish';
    background: var(--main-dark-2);
  }

  .display{
    color: var(--main-light-1);
    /* font-size: calc(1rem * 4 / 3 * 4); */
    line-height: 110%;
    font-weight: 200;
    letter-spacing: -0.025em;
  }

  h1{
    color: var(--main-light-1);
    font-size: calc(1rem * 4 / 3 * 3);
  }

  h2{
    color: var(--main);
    font-size: calc(1rem * 4 / 3 * 2);
  }

  h3{
    color: var(--main-dark-1);
    font-size: calc(1rem * 4 / 3 * 1);
  }
`;

export default GlobalStyle;
