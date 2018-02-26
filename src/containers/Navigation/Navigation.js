import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <nav className={classes.Navigation}>
        <ul>
          <NavigationItem to="/watch/create">Create Watch</NavigationItem>
          <NavigationItem to="/watch/list">Manage Watches</NavigationItem>
        </ul>
      </nav>
    )
  }
}

export default Navigation;