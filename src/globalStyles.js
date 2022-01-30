import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
    src: local('Ubuntu'), url(https://fonts.google.com/specimen/Ubuntu) format('woff');
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #14142B;
    height: 100vh;
    font-family: 'Ubuntu', sans-serif;
  }
`