import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class Footer extends Component {
  render() {
    return (
      <>
        <Typography variant="subtitle2" style={{color: '#65819DAA'}}>
          This documentation developed by{" "}
          <a 
            href="https://github.com/mbrn/libzy"
            target="_blank"
            style={{
              color: '#b9c6d2',
              textDecoration: 'none'
            }}
          >
            libzy
          </a>
        </Typography>
      </>
    );
  }
}