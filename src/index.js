import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import App from './App';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

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
    dark_blue: "#0A1026"
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
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
