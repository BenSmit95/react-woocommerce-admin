import React from 'react';
import classes from './TextInput.css';

const TextInput = (props) => (
    <div className={classes.TextInput}>
        <label>{props.label}{props.input.controls.required ? ' *' : null}</label>
        <input
            type="text"
            required={props.input.controls.required}
            name={props.input.name}
            onChange={(event) => props.onChange(props.input.name, event.target.value)}
            value={props.input.value}
        />
        {props.input.error ? <p className={classes.error}>{props.input.error}</p> : null}
    </div>
)

export default TextInput;