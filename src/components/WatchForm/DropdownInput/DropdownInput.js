import React from 'react';
import classes from './DropdownInput.css';

const DropdownInput = (props) => {

    const options = props.options.map((option, index) => (
        <option key={props.name + index}>{option}</option>
    ));

    if(props.whiteOption) options.unshift(<option key={props.name+'-1'}></option>);

    return (
        <div className={classes.DropdownInput}>
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