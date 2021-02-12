import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    display: flex;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary };
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle