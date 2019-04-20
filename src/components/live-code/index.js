import React, { Component } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Tooltip, Collapse, IconButton, Icon, Paper, withStyles, Typography } from '@material-ui/core';

class LiveCodeInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeBlockOpen: this.props.codeBlockOpen
    }
  }

  render() {
    return (
      <LiveProvider code={this.props.code}>
        <Paper className={this.props.classes.root}>
          <div className={this.props.classes.topBar}>
            <Typography className={this.props.classes.topBarTitle} variant="h6">
              {this.props.title}
            </Typography>
            <div className={this.props.classes.topBarActions}>
              <Tooltip title={this.state.codeBlockOpen ? "Hide the source code" : "Show the source code"}>
                <IconButton
                  onClick={() => this.setState(prev => ({ codeBlockOpen: !prev.codeBlockOpen }))}
                  color={this.state.codeBlockOpen ? "primary" : "default"}
                >
                  <Icon>code</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy the source code">
                <IconButton onClick={() => navigator.clipboard.writeText(this.props.code)}>
                  <Icon>file_copy</Icon>
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <Collapse in={this.state.codeBlockOpen} timeout="auto">
            <div className={this.props.classes.codeBlock}>
              <LiveEditor className={this.props.classes.code} />
              <LiveError className={this.props.classes.errorBlock} />
            </div>
          </Collapse>



          <LivePreview className={this.props.classes.preview}/>
        </Paper>
      </LiveProvider>
    );
  }
}

const styles = theme => ({
  root: {
    padding: 10
  },
  topBar: {
    display: 'flex',
  },
  topBarTitle: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5
  },
  topBarActions: {
  },
  codeBlock: {
  },
  code: {
    marginTop: 5,
    backgroundColor: 'rgb(40, 44, 52)',
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
    padding: 5
  }
});


const LiveCode = withStyles(styles, { withTheme: true })(LiveCodeInner);
export default LiveCode;