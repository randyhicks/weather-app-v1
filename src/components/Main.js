import React, { Component } from 'react';
import Nav from './Nav.js'

class Main extends Component {
  render () {
    return (
      <div>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
};

export default Main;