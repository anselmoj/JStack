import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora';
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;