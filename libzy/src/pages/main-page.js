import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        main page
        <Link to="/docs/get-started">
          docs
        </Link>
      </div>
    );
  }
}