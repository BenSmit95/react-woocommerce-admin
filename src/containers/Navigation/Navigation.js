import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <nav className={classes.Navigation}>
        <ul>
          <h3 className={classes.tag}>Watches</h3>
          <NavigationItem to="/watch/create">Create Watch</NavigationItem>
          <NavigationItem to="/watch/list">Manage Watches</NavigationItem>
          <h3 className={classes.tag}>Jewelry</h3>
          <NavigationItem to="/jewelry/create">Create Jewelry</NavigationItem>
          <NavigationItem to="/jewelry/list">Manage Jewelry</NavigationItem>
        </ul>
      </nav>
    )
  }
}

export default Navigation;