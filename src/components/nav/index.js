import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from "react-router-dom";

export default class Nav extends Component {

  renderItem = (item) => {
    if (item.component) {
      return (
        <ListItem button to={"/" + this.props.basePath + "/" + item.path} component={Link}>
          <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      );
    }
    else{
      // Draw sub menu here. 
    }
  }

  render() {
    return (
      <List dense>
        {this.props.tree.map(item => this.renderItem(item))}
      </List>
    )
  }
}