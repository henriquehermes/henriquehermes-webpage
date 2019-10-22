import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #f6f6f6;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}
`;
