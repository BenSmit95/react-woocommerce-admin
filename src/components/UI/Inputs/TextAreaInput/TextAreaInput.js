import React from 'react';
import classes from './TextAreaInput.css';

const TextAreaInput = (props) => (
  <div className={classes.TextArea}>
    <label>{props.label}</label>
    <textarea 
      required={props.input.controls.required}
      name={props.input.name}
      onChange={(event) => props.onChange(props.input.name, event.target.value)}
      value={props.input.value}
      className={classes.TextInput}
    />
    {props.input.error ? <p className={classes.error}>{props.input.error}</p> : null}
  </div>
)

export default TextAreaInput;