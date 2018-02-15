import React from 'react';
import classes from './TextInput.css';

const TextInput = (props) => (
    <div className={classes.TextInput}>
        <label>{props.label}{props.required ? ' *' : null}</label>
        <input
            type="text"
            required={props.required}
            name={props.name}
            onChange={(event) => props.onChange(props.name, event.target.value)}
        />
    </div>
)

export default TextInput;