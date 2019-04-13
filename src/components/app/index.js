import React, { Component } from 'react';
import LibzyAppBar from '../app-bar';
import Footer from '../footer';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="main">
          <LibzyAppBar />          
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}