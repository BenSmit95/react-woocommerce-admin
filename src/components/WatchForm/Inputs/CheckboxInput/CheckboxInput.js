import React from 'react';

import classes from './CheckboxInput.css';

const CheckboxInput = (props) => (
  <div className={classes.CheckboxInput}>
    <input
      type="checkbox"
      name={props.input.name}
      onChange={() => props.onChange(props.input.name)}
      checked={props.input.value}
    />
    <label>{props.label}{props.input.controls.required ? ' *' : ''}</label>
  </div>
)

export default CheckboxInput;