import React from 'react';
import classes from './DropdownInput.css';

const DropdownInput = (props) => {

    const options = props.options.map((option, index) => (
        <option key={props.input.name + index}>{option}</option>
    ));

    if(props.input.controls.whiteOption) options.unshift(<option key={props.input.name+'-1'}></option>);

    return (
        <div className={classes.DropdownInput}>
            <label>{props.label}{props.input.controls.required ? ' *' : null}</label>
            <select 
                required={props.input.controls.required}
                name={props.input.name}
                onChange={(event) => props.onChange(props.input.name, event.target.value)}
                value={props.input.value}
            >
                {options}
            </select>
        </div>
    )
}

export default DropdownInput;