import React from 'react';
import classes from './DropdownPane.css';

const DropdownPane = (props) => {

  let content = null;
  let classNames = classes.label;
  if (props.visible) {
    classNames = [classes.label, classes.active].join(' ');
    content = <div className={classes.content}>{props.children}</div>
  }
  
  return (
    <div className={classes.classNames}>
      <div className={classNames} onClick={props.onClicked}>{props.label}</div>
        {content}
    </div>
  )
}

export default DropdownPane;