import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${(p) => p.theme.palette.scrollbarBackgroundColor};
  }

  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: ${(p) => p.theme.palette.base};
  }

  .flex {
    display: flex;
  }

  .align-center {
    align-items: center;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
