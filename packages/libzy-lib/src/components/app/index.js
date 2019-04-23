import React, { Component } from 'react';
import LibzyAppBar from '../app-bar';
import PageContainer from '../page-container';
import Footer from '../footer';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core';
import { withConfig } from '../config-context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true
    };
  }

  showMenuButton = () => {
    const page = this.props.config.menuTree.slice().reverse().find(a => this.props.location.pathname.startsWith("/" + a.path));

    if(page && page.tree && page.tree.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.main}>
          <LibzyAppBar showMenuButton={this.showMenuButton()} onMenuButtonClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })} />
          <div className={this.props.classes.content}>
            <PageContainer isMenuOpen={this.state.isMenuOpen} />
          </div>
        </div>
        <footer className={this.props.classes.footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  main: {
    flex: '1 0 auto'
  },
  content: {
    marginBottom: 30,
    display: 'inline-flex',
    minWidth: '100%',
    flexDirection: 'row',
    height: 'calc(100% - 48px)',
    backgroundColor: '#e8eaf5',
  },
  footer: {
    flexShrink: 0,
    backgroundColor: '#2b3e50',
    padding: 15,  
  }
});

export default withStyles(styles, {withTheme: true})(withRouter(withConfig(App)))