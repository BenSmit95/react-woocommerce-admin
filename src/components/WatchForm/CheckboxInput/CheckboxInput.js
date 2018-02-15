import React from 'react';

const CheckboxInput = (props) => (
  <div>
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