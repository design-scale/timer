import { createGlobalStyle, css } from 'styled-components'

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

  :focus {
    outline: 0;
    box-shaddow: 0 0 0 2px ${(props) => props.theme['green-500']}
  },

  body {

    color: #FFF;
  },

  button {
    cursor: pointer;
  }
  


  ${({ theme }) => css`
  
    body {
      background: ${theme['gray-900']}

    },

  `}

`

export default GlobalStyles
