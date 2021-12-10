import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import thunk from 'redux-thunk';
import { Helmet } from 'react-helmet';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
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
    dark_blue: "#0A1026",
    blue: "#4255D4",
    danger: "#EB0000",
    closeBtn: "#FF2F23",
  },
  media: {
    tablet: "(max-width: 800px)",
    mobile: "(max-width: 420px)"
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
