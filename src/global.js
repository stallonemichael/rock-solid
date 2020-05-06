import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
*,*:before,*:after {
  box-sizing: border-box;
}
body {
  font-family:  'Roboto Condensed', sans-serif;
  color: ${({ theme }) => theme.primaryLight};
}
a {
  text-decoration: none;
}
`;
