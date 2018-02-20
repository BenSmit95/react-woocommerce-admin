import React from 'react';
import classes from './MassCheckboxInput.css';

const MassCheckboxInput = (props) => (
  <div className={classes.MassCheckboxInput}>
    <input 
      type="checkbox"
      name={props.name}
      onChange={() => props.onCheckboxToggle(props.fieldName, props.name)}
    />
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

export default MassCheckboxInput;