import React from 'react';

const DropdownInput = (props) => {

    const options = props.options.map((option, index) => (
        <option>{option}</option>
    ));

    if(props.whiteOption) options.unshift(<option></option>);

    return (
        <div>
            <label>{props.label}{props.required ? ' *' : null}</label>
            <select 
                required={props.required}
                name={props.name}
                onChange={(event) => props.onChange(props.name, event.target.value)}
                value={props.value}
            >
                {options}
            </select>
        </div>
    )
}

export default DropdownInput;