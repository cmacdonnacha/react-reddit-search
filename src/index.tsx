import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from 'slices';
import { colours } from 'constants/colours';

const store = configureStore({ reducer: rootReducer });

const theme = {
  primary: '#00C068',
};

const GlobalStyle = createGlobalStyle`
  html, #root {
    height: 100%;
    background-color: ${colours.offWhite};
  }

  body {
    height: 100%;
    margin: 0;
    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <App />
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
