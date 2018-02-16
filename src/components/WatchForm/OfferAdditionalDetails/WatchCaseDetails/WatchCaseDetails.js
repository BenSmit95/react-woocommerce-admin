import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchCaseWaterproof, watchCaseGlass, watchDial, watchDialNumerals, watchMaterialBezel } from '../../../../_secret/watchFormData';
import { setWatchFormField } from '../../../../store/actions/index';
import classes from './WatchCaseDetails.css';

import NumberInput from '../../Inputs/NumberInput/NumberInput';
import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';



class WatchCaseDetails extends Component {
  render() {
    return (
      <div className={classes.WatchCaseDetails}>
        <div>
          <label>Case diameter (mm)</label>         
          <div className={classes.caseDiameter}>
            <NumberInput
              input={this.props.inputs.watchCaseDiameterLength}
              onChange={this.props.onValueChange}
            />
            <p className={classes.caseX}>x</p>
            <NumberInput
              input={this.props.inputs.watchCaseDiameterDepth}
              onChange={this.props.onValueChange}
            />
          </div>
        </div>
        <NumberInput
          label={'Thickness (mm)'}
          input={this.props.inputs.watchCaseThickness}
          onChange={this.props.onValueChange}
        />
        <DropdownInput
          label={'Waterproof'}
          input={this.props.inputs.watchCaseWaterproof}
          options={watchCaseWaterproof}
          onChange={this.props.onValueChange}
        />
        <DropdownInput
          label={'Glass'}
          input={this.props.inputs.watchCaseGlass}
          options={watchCaseGlass}
          onChange={this.props.onValueChange}
        />
        <DropdownInput
          label={'Dial'}
          input={this.props.inputs.watchDial}
          options={watchDial}
          onChange={this.props.onValueChange}
        />
        <DropdownInput
          label={'Dial numerals'}
          input={this.props.inputs.watchDialNumerals}
          options={watchDialNumerals}
          onChange={this.props.onValueChange}
        />
        <DropdownInput
          label={'Material bezel'}
          input={this.props.inputs.watchMaterialBezel}
          options={watchMaterialBezel}
          onChange={this.props.onValueChange}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  inputs: {
    watchCaseDiameterLength: state.watchForm.watchCaseDiameterLength,
    watchCaseDiameterDepth: state.watchForm.watchCaseDiameterDepth,
    watchCaseThickness: state.watchForm.watchCaseThickness,
    watchCaseWaterproof: state.watchForm.watchCaseWaterproof,
    watchCaseGlass: state.watchForm.watchCaseGlass,
    watchDial: state.watchForm.watchDial,
    watchDialNumerals: state.watchForm.watchDialNumerals,
    watchMaterialBezel: state.watchForm.watchMaterialBezel,
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchCaseDetails);