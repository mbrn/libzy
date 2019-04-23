import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react'
import MdxComponents from '../mdx-components';
import theme from '../theme';
import App from '../app';
import { ConfigContext } from '../config-context';


export default class LibzyRoot extends Component {
  render() {
    let Router = BrowserRouter;
    if(this.props.config.options.routerType === "hash") {
      Router = HashRouter;
    }

    return (
      <ConfigContext.Provider value={this.props.config}>
        <Router>
          <MuiThemeProvider theme={theme(this.props.config)}>
            <MDXProvider components={MdxComponents}>
              <App />
            </MDXProvider>
          </MuiThemeProvider>
        </Router>
      </ConfigContext.Provider>
    );
  }
}