import React from 'react';

import classes from './CheckboxInput.css';

const CheckboxInput = (props) => (
  <div className={classes.CheckboxInput}>
    <input
      type="checkbox"
      name={props.name}
      onChange={() => props.onChange(props.target)}
      checked={props.checked}
    />
    <label>{props.label}{props.required ? ' *' : ''}</label>
  </div>
)

export default CheckboxInput;