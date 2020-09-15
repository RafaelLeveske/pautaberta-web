import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #F7F8FC;
  color: #252733;
  -webkit-font-smothing: antialiased;
}
body, input, button {
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  outline: 0;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
button {
  cursor: pointer;
}
`;
