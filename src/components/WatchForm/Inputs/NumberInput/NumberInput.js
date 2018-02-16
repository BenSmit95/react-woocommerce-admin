import React from 'react';
import classes from './NumberInput.css';

const NumberInput = (props) => (
  <div className={classes.NumberInput}>
    <label>{props.label}{props.input.controls.required ? ' *' : null}</label>
    <input
      type="number"
      required={props.input.controls.required}
      name={props.input.name}
      onChange={(event) => props.onChange(props.input.name, event.target.value)}
    />
  </div>
);

export default NumberInput;