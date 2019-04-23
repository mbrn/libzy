import React, { Component } from 'react';
import LibzyAppBar from '../app-bar';
import PageContainer from '../page-container';
import Footer from '../footer';
import { withRouter } from 'react-router';
import LibzyConfig from '../../../libzy.config';
import './index.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true
    };
  }

  showMenuButton = () => {
    const page = LibzyConfig.menuTree.slice().reverse().find(a => this.props.location.pathname.startsWith("/" + a.path));

    if(page && page.tree && page.tree.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div id="container">
        <div id="main">
          <LibzyAppBar showMenuButton={this.showMenuButton()} onMenuButtonClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })} />
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


export default withRouter(App)