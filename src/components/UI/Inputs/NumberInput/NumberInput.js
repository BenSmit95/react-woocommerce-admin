import React from 'react';
import classes from './NumberInput.css';

const NumberInput = (props) => (
  <div className={classes.NumberInput}>
    {props.label ? <label>{props.label}{props.input.controls.required ? ' *' : null}</label> : null}
    <input
      type="number"
      required={props.input.controls.required}
      name={props.input.name}
      onChange={(event) => props.onChange(props.input.name, event.target.value)}
      value={props.input.value}
    />
    {props.input.error ? <p className={classes.error}>{props.input.error}</p> : null}
  </div>
);

export default NumberInput;