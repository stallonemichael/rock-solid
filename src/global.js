import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*:before,*:after {
  margin: 0;
  padding: 0;
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
