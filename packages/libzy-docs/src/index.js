import React from 'react';
import ReactDOM from 'react-dom';
import LibzyConfig from '../libzy.config';
import './index.scss';
import LibzyRoot from 'libzy-lib';

ReactDOM.render(
  <LibzyRoot config={LibzyConfig}/>,
  document.getElementById('root')
);