import React from 'react';

const TextInput = (props) => (
    <div>
        <label>{props.label}{props.required ? ' *' : null}</label>
        <input
            type="text"
            required={props.required}
            name={props.name}
        />
    </div>
)

export default TextInput;