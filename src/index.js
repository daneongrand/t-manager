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

  &::-webkit-scrollbar {
      width: 5px;
      height: 100%;
  }
  &::-webkit-scrollbar-thumb {
      background: rgba(24, 29, 49, 1);
      border-radius: 9em;
      box-shadow: inset 1px 1px 10px #f3faf7;
}
`

const theme = {
  colors: {
    dark_blue: "#0A1026",
    blue: "#4255D4",
    blueLight: "#47BDEF",
    green: '#05EB00',
    danger: "#EB0000",
    closeBtn: "#FF2F23",
    disabled: "#6E6D70",
  },
  media: {
    desktop_small: "(max-width: 1240px)",
    tablet: "(max-width: 800px)",
    mobile: "(max-width: 420px)"
  }
}


ReactDOM.render(
  <ThemeProvider theme={theme}>    
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyled />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
