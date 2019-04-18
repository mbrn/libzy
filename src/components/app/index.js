import React, { Component } from 'react';
import LibzyAppBar from '../app-bar';
import PageContainer from '../page-container';
import Footer from '../footer';
import './index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true
    };
  }

  render() {
    return (
      <div id="container">
        <div id="main">
          <LibzyAppBar onMenuButtonClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })} />
          <div id="content">
            <PageContainer isMenuOpen={this.state.isMenuOpen} />
          </div>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}