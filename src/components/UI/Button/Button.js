import React from 'react';
import classes from './Button.css';

const Button = (props) => (
  <button
    onClick={props.onClick}
    disabled={props.disabled}
    className={classes.Button}
    type={props.type ? props.type : 'button'}
  >
    {props.children}
  </button>
);

export default Button;