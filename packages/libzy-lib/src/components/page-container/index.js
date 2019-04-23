import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import Nav from '../nav';
import { withConfig } from '../config-context';

class PageContainer extends Component {

  getMenuTreeRoute(item, basePath) {
    if (item.tree) {
      return item.tree.map(treeItem => this.getMenuTreeRoute(treeItem, basePath + "/" + item.path));
    }
    else {
      return <Route path={basePath + "/" + item.path} component={item.component} />;
    }
  }

  getRoute = (item) => {
    if (item.component) {
      return <Route exact path={"/" + item.path} render={props => <item.component {...props} data={item.data} />} />
    }
    else {
      return (
        <Route path={"/" + item.path} render={() => (
          <>
            <div className={this.props.classes.nav} style={{ width: this.props.isMenuOpen ? 240 : 0, marginLeft: this.props.isMenuOpen ? 20 : 0 }}>
              <Nav basePath={item.path} tree={item.tree} />
            </div>
            <div className={this.props.classes.page}>
              {item.tree.map(treeItem => this.getMenuTreeRoute(treeItem, "/" + item.path))}              
            </div>
          </>
        )} />
      );
    }
  }

  render() {
    return (
      this.props.config.menuTree.map(item => this.getRoute(item))
    );
  }
}


const styles = theme => ({
  nav: {
    transition: 'all ease 300ms',
    flexShrink: 0,
    backgroundColor: 'white',
    width: 240,
    height: 'calc(100% - 40px)',
    overflow: 'hidden',      
    borderRadius: 5,
    margin: '20px 0px 20px 0px',
  },
  page: {
    flex: '1 0 auto',
    flexShrink: 'inherit',
    maxWidth: 960,
    height: 'calc(100% - 40px)',
    margin: 'auto',
    padding: '0px 20px',
    '& @media screen and (max-width: 767px)': {
      padding: '0px 5px'
    }
  }
});

export default withConfig(withStyles(styles, {withTheme: true})(PageContainer))