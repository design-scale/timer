import {
    createGlobalStyle,
    css
  } from 'styled-components'


  const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  },

  button {
    cursor: pointer;
  }


  ${({ theme}) => css`
  
    body {
      color: ${theme.secondary}
    },

  `}

`

export default GlobalStyles