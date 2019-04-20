import React, { Component } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Icon, withStyles, withTheme } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expandedItems: []
    }
  }

  handleNodeClick = (id) => {
    this.setState(prev => {
      const list = prev.expandedItems;
      const index = list.indexOf(id);
      if (index > -1) {
        list.splice(index, 1);
      }
      else {
        list.push(id);
      }

      return { expandedItems: list };
    });
  };


  renderNavItem(item, path, nestingLevel = 0) {
    const itemStyle = {
      paddingLeft: 10 + 20 * nestingLevel,
    }

    if (item.tree && item.tree.length > 0) {
      const open = this.state.expandedItems.indexOf(item.id) > -1;
      return (
        <>
          <ListItem key={item.path} id={"menu-item-" + item.path} classes={{ root: this.props.classes.listItemRoot }} button onClick={() => { this.handleNodeClick(item.id) }} style={itemStyle}>
            <ListItemText primary={item.text} />
            <Icon>{open ? "expand_less" : "expand_more"}</Icon>
          </ListItem>
          <Collapse in={open} timeout="auto">
            <List dense disablePadding>
              {item.tree.map(subItem => { return this.renderNavItem(subItem, path + "/" + item.path, nestingLevel + 1); })}
            </List>
          </Collapse>
        </>
      );
    }
    else {

      let listItemTextStyle = { };
      let listItemStyle = Object.assign({}, itemStyle);

      if (this.props.location.pathname === "/" + path + "/" + item.path) {
        listItemTextStyle = {
          fontWeight: 600,
          color: this.props.theme.palette.primary.main
        };

        listItemStyle.backgroundColor = lighten(this.props.theme.palette.primary.light, 0.85);
      }

      return (
        <ListItem
          key={item.path}
          id={"menu-item-" + item.path}
          button
          classes={{ root: this.props.classes.listItemRoot }}
          style={listItemStyle}
          to={"/" + path + "/" + item.path}
          component={Link}
        >
          <ListItemText primary={<div style={listItemTextStyle}>{item.text}</div>} />
        </ListItem>
      );
    }
  }

  render() {
    return (
      <List
        dense
        key="NavListKey"
        component="nav"
        disablePadding
        style={{padding: 5}}
      >
        {
          this.props.tree.map(item => {
            return this.renderNavItem(item, this.props.basePath);
          })
        }
      </List>
    );

  }
}

const styles = (theme) => ({
  listItemIconRoot: {
    marginRight: 0,
  },
  listItemRoot: {
    color: '#65819D',
    borderRadius: 5,
    borderBottomColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.light, 0.85)
    }
  }
});

export default withRouter(withTheme()(withStyles(styles)(Nav)));