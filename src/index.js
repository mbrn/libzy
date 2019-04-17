import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react'
import MdxComponents from './components/mdx-components';
import theme from './theme';
import './index.scss';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MDXProvider components={MdxComponents}>
        <App />
      </MDXProvider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);