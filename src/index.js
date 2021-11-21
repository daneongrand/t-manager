import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import App from './App';

const GlobalStyled = createGlobalStyle`
  body {
      max-width: 100vw;
      height: 100vh;
      background-color: #252954;
      font-family: 'Roboto';
  }

  #root {
      width: 100%;
      height: 100%;
  }

  h1 {
      margin: 0;
      padding: 0;
  }
`

const theme = {
  colors: {
    black: ""
  },
  media: {
    tablet: "(max-width: 800px)"
  }
}


ReactDOM.render(
  <ThemeProvider theme={theme}>    
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
