import React, { Component } from 'react';
import classes from './VariableInput.css';

class VariableInput extends Component {
  state = {
    isDropdown: true
  }

  onChange = (event) => {
    this.props.onChange(this.props.input.name, event.target.value)
  }

  render() {

    const input = this.state.isDropdown ? (
      <select
        onChange={this.onChange}
        value={this.props.input.value}
      >
        {[<option></option>].concat(this.props.options.map((option, index) => (
          <option>{option}</option>
        )))}
      </select>
    ) : (
        <input 
          type="text" 
          onChange={this.onChange}
          value={this.props.input.value}
        />
      );

    return (
      <div className={classes.VariableInput}>
        <label>{this.props.label}{this.props.input.controls.required ? ' *' : null}</label>
        <div className={classes.container}>
        {input}
        <button
          type="button"
          onClick={() => (this.setState((prevState) => ({ isDropdown: !prevState.isDropdown })))}
        >
          switch
        </button>
        </div>
      </div>
    )
  }
}

export default VariableInput;