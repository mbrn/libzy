import React from 'react';
import { Icon, IconButton, Paper, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LibzyConfig from '../../../libzy.config';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

export default {
  h1: (props) => <div>
    <Typography
      variant="h4" {...props} />
    <div style={{
      width: 50,
      borderBottom: '4px solid ' + LibzyConfig.theme.palette.primary.main,
      borderRadius: 4
    }}></div>
    <br />
    <br />
  </div>,
  h2: (props) => <div><Typography variant="h5" {...props} /><br /></div>,
  p: (props) => <div><Typography variant="subtitle1" {...props} style={{ color: '#65819D' }} /><br /></div>,
  ul: (props) => <List>{props.children}</List>,
  li: (props) => (
    <ListItem>
      <ListItemIcon style={{ marginRight: 0, alignSelf: 'flex-start' }}><Icon style={{ color: '#65819D' }} iconSize="small">keyboard_arrow_right</Icon></ListItemIcon>
      <ListItemText><Typography variant="subtitle1" {...props} style={{ color: '#65819D' }} /></ListItemText>
    </ListItem>
  ),
  a: (props) => {
    if (props.href.startsWith("http")) {
      return (
        <a href={props.href}
          style={{
            color: LibzyConfig.theme.palette.primary.main,
            textDecoration: 'none',
            fontWeight: 600
          }}>
          {props.children}
        </a>
      );
    }
    else {
      return (
        <Link to={props.href}
          style={{
            color: LibzyConfig.theme.palette.primary.main,
            textDecoration: 'none',
            fontWeight: 600
          }}>
          {props.children}
        </Link>
      );
    }
  },
  blockquote: (props) => <div>
    <Paper elevation={0}
      style={{
        padding: 15,
        color: 'rgb(132, 146, 166)',
        backgroundColor: 'white',
        borderLeft: '4px solid ' + LibzyConfig.theme.palette.primary.main,
        margin: '0px 3px'
      }}>
      {props.children.props.children}
    </Paper>
    <br />
  </div>,
  table: (props) => <table
    style={{
      width: '100%'
    }}>
    {props.children}
  </table>,
  thead: (props) => <thead
    style={{
      backgroundColor: 'white',
    }}>
    {props.children}
  </thead>,
  th: (props) => <th style={{ padding: 10 }}><Typography variant="subtitle1" style={{ color: '#65819D' }}>{props.children}</Typography></th>,
  tbody: (props) => <tbody style={{ backgroundColor: '#f9f9f9' }}>{props.children}</tbody>,
  tr: (props) => <tr>{props.children}</tr>,
  td: (props) => <td style={{ padding: 5, textAlign: 'center' }} ><Typography variant="subtitle1" style={{ color: '#91A0B1' }}>{props.children}</Typography></td>,
  inlineCode: (props) => <code
    style={{
      backgroundColor: 'rgb(239, 242, 247)',
      padding: '3px 5px',
      color: 'indianred',
      borderRadius: 3
    }}>
    {props.children}
  </code>,
  code: (props) => {
    if (props.className === "language-console") {
      return (
        <div>
          <Paper elevation={0}
            style={{
              padding: 10,
              color: '#DDD',
              backgroundColor: 'rgb(40, 44, 52)',
              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: 'initial'
            }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                {props.children}
              </div>
              <IconButton style={{ padding: 0 }} disableRipple onClick={() => navigator.clipboard.writeText(props.children)}>
                <Icon style={{ color: '#FFFFFF99', fontSize: 16 }}>file_copy</Icon>
              </IconButton>
            </div>
          </Paper>
          <br />
        </div>
      );
    }
    else if (props.className === "language-javascript") {
      return <CodeMirror
        value={props.children.trim()}
        options={{
          mode: 'javascript',
          theme: 'lucario',
          lineNumbers: false,
          readOnly: true
        }}
        onChange={(editor, data, value) => {
        }} />;
    }
    else if (props.className === "language-jsx") {
      return <CodeMirror
        value={props.children.trim()}
        options={{
          mode: 'jsx',
          theme: 'lucario',
          lineNumbers: false,
          readOnly: true
        }}
        onChange={(editor, data, value) => {
        }} />;
    }
    else {
      return <div>{props.children}</div>;
    }
  }
}