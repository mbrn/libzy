import React, { Component } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button, Tooltip, Collapse, IconButton, Icon, Paper, withStyles, Typography } from '@material-ui/core';

class LiveCodeInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.expanded,
      code: this.props.code,
      codeBlockOpen: this.props.codeBlockOpen
    }
  }

  render() {
    return (
      <LiveProvider code={this.state.code} scope={this.props.scope}>
        <Paper className={this.props.classes.root}>
          <div className={this.props.classes.topBar}>
            <div style={{ flex: 1 }}>
              <Tooltip title={this.state.expanded ? "Hide" : "Show"}>
                <IconButton
                  style={{
                    transition: 'all ease 300ms',
                    transform: this.state.expanded ? 'rotate(90deg)' : ''
                  }}
                  onClick={() => this.setState(prev => ({ expanded: !prev.expanded }))}
                >
                  <Icon>chevron_right</Icon>
                </IconButton>
              </Tooltip>
              <Typography variant="subtitle1" className={this.props.classes.topBarTitle}>
                {this.props.title}
              </Typography>
            </div>
            {this.state.expanded &&
              <div className={this.props.classes.topBarActions}>
                <Tooltip title={this.state.codeBlockOpen ? "Hide the source code" : "Show the source code"}>
                  <IconButton
                    onClick={() => this.setState(prev => ({ codeBlockOpen: !prev.codeBlockOpen }))}
                  >
                    <Icon>code</Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy the source code">
                  <IconButton onClick={() => navigator.clipboard.writeText(this.state.code)}>
                    <Icon>file_copy</Icon>
                  </IconButton>
                </Tooltip>
              </div>
            }
          </div>
          <Collapse in={this.state.expanded} timeout="auto">
            {this.props.description &&
              <Typography variant="subtitle2" className={this.props.classes.description}>{this.props.description}</Typography>
            }
            <Collapse in={this.state.codeBlockOpen} timeout="auto">
              <div className={this.props.classes.codeBlock}>
                <LiveEditor className={this.props.classes.code} onChange={code => this.setState({ code })} />
                <LiveError className={this.props.classes.errorBlock} />
              </div>
            </Collapse>
            <div className={this.props.classes.preview}>
              <LivePreview className={this.props.classes.livePreview} />
            </div>
          </Collapse>
        </Paper>
      </LiveProvider>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: 10,
    padding: 10,
    display: 'grid'
  },
  topBar: {
    display: 'flex',
  },
  topBarTitle: {
    color: '#65819D',
    display: 'inline-block',
  },
  topBarActions: {
  },
  description: {
    color: '#65819D',
    padding: 5
  },
  codeBlock: {
  },
  code: {
    marginTop: 5,
    backgroundColor: '#2b3e50',
    borderRadius: 5,
    caretColor: 'white'
  },
  errorBlock: {
    marginTop: 5,
    marginBottom: 0,
    color: '#e53935',
    backgroundColor: '#ffcdd2',
    borderRadius: 5,
    padding: 10
  },
  preview: {
    marginTop: 5,
    backgroundColor: '#e8eaf5',
    borderRadius: 5,
    padding: 5,
    display: 'grid'
  },
  livePreview: {
    maxWidth: '100%',
    overflow: 'auto'
  }
});


const LiveCode = withStyles(styles, { withTheme: true })(LiveCodeInner);
export default LiveCode;