import React from 'react'
import { ThemeProvider } from "styled-components";
// import themes from 'constants/theme'
import { Router } from "react-router-dom";
import Routes from './routes'
import store from 'store'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/globalStyle'
import ErrorBoundary from 'components/ErrorBoundaries';

import { history } from 'helpers/common';
import { Layout } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import theme from './styles/theme'

const { Content } = Layout;

const App: React.FunctionComponent = () => {
  // const { location } = history;
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle />
              <Routes />
          </ErrorBoundary>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App;
