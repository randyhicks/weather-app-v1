import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render () {
    return(
      <div>
        <h2>Nav Component</h2>
        <NavLink activeClassName='active' to='/home'>Home</NavLink>
        <NavLink activeClassName='active' to='/weather'>Get Weather</NavLink>
        <NavLink activeClassName='active' to='/about'>About</NavLink>
        <NavLink activeClassName='active' to='/examples'>Examples</NavLink>
      </div>
    )
  }
}

export default Nav;
