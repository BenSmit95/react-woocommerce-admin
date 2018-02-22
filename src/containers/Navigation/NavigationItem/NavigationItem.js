import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';


const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      className={classes.navLink}
      activeClassName={classes.active}
      to={props.to}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;