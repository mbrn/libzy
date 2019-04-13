import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, withStyles } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}