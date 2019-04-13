import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LibzyConfig from '../../../libzy.config';

export default class Router extends Component {

  getRoute = (item) => {
    if (item.component) {
      return <Route exact path={"/" + item.path} component={item.component} />
    }
    else {
      return item.tree.map(treeItem => (
        <Route path={"/" + item.path + "/" + treeItem.path} component={treeItem.component} />
      ));
    }
  }

  render() {
    return (
        LibzyConfig.menuTree.map(item => this.getRoute(item))
    );

  }
}