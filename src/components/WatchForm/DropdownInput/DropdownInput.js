import React from 'react';

const DropdownInput = (props) => {

    const options = props.options.map((option, index) => (
        <option>{option}</option>
    ));

    return (
        <div>
            <label>{props.label}{props.required ? ' *' : null}</label>
            <select 
                required={props.required}
                name={props.name}
            >
                {options}
            </select>
        </div>
    )
}

export default DropdownInput;