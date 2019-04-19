import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react'
import MdxComponents from './components/mdx-components';
import theme from './theme';
import './index.scss';
import App from './components/app';
import LibzyConfig from '../libzy.config';

let Router = BrowserRouter;
if(LibzyConfig.options.routerType === "hash") {
  Router = HashRouter;
}


ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <MDXProvider components={MdxComponents}>
        <App />
      </MDXProvider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);