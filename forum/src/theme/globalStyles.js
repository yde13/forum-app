import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;

}  

body {
  background-color: ${(props) => props.theme.colors.mainDarkColor};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.text};
}

a {
  color: white;
}

h1 {
  // margin-bottom: 20px;
}

`;

export default GlobalStyle;