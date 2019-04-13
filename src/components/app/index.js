import React, { Component } from 'react';
import LibzyAppBar from '../app-bar';
import Nav from '../nav';
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
          <LibzyAppBar onMenuButtonClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}/>
          <div id="content">            
            <div className="nav" style={{width: this.state.isMenuOpen ? 240 : 0}}>
              <Nav />
            </div>
            <div className="page">
            </div>
          </div>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}