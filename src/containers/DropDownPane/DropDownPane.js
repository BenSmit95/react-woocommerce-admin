import React from 'react';
import classes from './DropdownPane.css';

const DropdownPane = (props) => {

  let content = (props.visible ? props.children : null)

  return (
    <div className={classes.DropdownPane}>
      <div className={classes.label} onClick={props.onClicked}>{props.label}</div>
        {content}
    </div>
  )
}

export default DropdownPane;