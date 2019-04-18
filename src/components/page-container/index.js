import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LibzyConfig from '../../../libzy.config';
import Nav from '../nav';

export default class PageContainer extends Component {
  getRoute = (item) => {
    if (item.component) {
      return <Route exact path={"/" + item.path} render={props => <item.component {...props} config={LibzyConfig} data={item.data}/> }/>
    }
    else {
      return (
        <Route path={"/" + item.path} render={() => (
          <>
            <div className="nav" style={{ width: this.props.isMenuOpen ? 240 : 0 }}>
              <Nav basePath={item.path} tree={item.tree}/>
            </div>
            <div className="page">
              {item.tree.map(treeItem => (
                <Route path={"/" + item.path + "/" + treeItem.path} component={treeItem.component} />
              ))}
            </div>
          </>
        )} />
      );
    }
  }

  render() {
    return (
      LibzyConfig.menuTree.map(item => this.getRoute(item))
    );
  }
}