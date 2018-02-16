import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWatchFormField } from '../../../../store/actions/index';
import { watchFrequencyUnit } from '../../../../_secret/watchFormData';
import classes from './WatchCaliberDetails.css';

import NumberInput from '../../Inputs/NumberInput/NumberInput';
import TextInput from '../../Inputs/TextInput/TextInput';
import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';

class WatchCaliberDetails extends Component {
  render() {
    return (
      <div className={classes.WatchCaliberDetails}>
        <TextInput 
          label={'Movement/Caliber'}
          input={this.props.inputs.watchCaliberMovement}
          onChange={this.props.onValueChange}
        />
        <TextInput 
          label={'Base Caliber'}
          input={this.props.inputs.watchBaseCaliber}
          onChange={this.props.onValueChange}
        />
        <TextInput 
          label={'Power reserve'}
          input={this.props.inputs.watchPowerReserve}
          onChange={this.props.onValueChange}
        />
        <NumberInput 
          label={'Number of jewels'}
          input={this.props.inputs.watchJewelCount}
          onChange={this.props.onValueChange}
        />
        <div className={classes.watchFrequency}>
          <NumberInput 
            label={'Frequency'}
            input={this.props.inputs.watchFrequency}
            onChange={this.props.onValueChange}
          />
          <DropdownInput 
            onChange={this.props.onValueChange}
            input={this.props.inputs.watchFrequencyUnit}
            options={watchFrequencyUnit}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    watchCaliberMovement: state.watchForm.watchCaliberMovement,
    watchBaseCaliber: state.watchForm.watchBaseCaliber,
    watchPowerReserve: state.watchForm.watchPowerReserve,
    watchJewelCount: state.watchForm.watchJewelCount,
    watchFrequency: state.watchForm.watchFrequency,
    watchFrequencyUnit: state.watchForm.watchFrequencyUnit,
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchCaliberDetails);