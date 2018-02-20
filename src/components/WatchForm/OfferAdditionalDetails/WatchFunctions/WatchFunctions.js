import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchFunctions } from '../../../../_secret/watchFormData';
import { toggleMassWatchFormCheckbox } from '../../../../store/actions/index';
import classes from './WatchFunctions.css';

import MassCheckboxInput from '../../../UI/Inputs/MassCheckboxInput/MassCheckboxInput';

class WatchFunctions extends Component {
  render() {

    const checkboxes = watchFunctions.map((functionObj, index) => (
      <MassCheckboxInput 
        key={`functions${index}`}
        label={functionObj.label}
        name={functionObj.name}
        fieldName={'watchFunctions'}
        onCheckboxToggle={this.props.onCheckboxToggle}
      />
    ))

    return (
      <div className={classes.WatchFunctions}>
        {checkboxes}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCheckboxToggle: (fieldName, attribute) => dispatch(toggleMassWatchFormCheckbox(fieldName, attribute))
})

export default connect(undefined, mapDispatchToProps)(WatchFunctions);