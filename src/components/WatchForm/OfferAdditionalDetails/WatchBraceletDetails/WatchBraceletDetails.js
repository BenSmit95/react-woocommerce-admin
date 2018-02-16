import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchBraceletColor, watchClasp, watchClaspMaterial } from '../../../../_secret/watchFormData';
import { setWatchFormField } from '../../../../store/actions/index';

import classes from './WatchBraceletDetails.css';

import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';
import NumberInput from '../../Inputs/NumberInput/NumberInput';

class BraceletDetails extends Component {
  render() {
    return (
      <div className={classes.WatchBraceletDetails}>
        <div className={classes.row1}>
          <DropdownInput 
            options={watchBraceletColor}
            label={'Bracelet color'}
            input={this.props.inputs.watchBraceletColor}
            onChange={this.props.onValueChange}
          />
          <DropdownInput
            options={watchClasp}
            label={'Clasp'}
            input={this.props.inputs.watchClasp}
            onChange={this.props.onValueChange}
          />
          <DropdownInput
            options={watchClaspMaterial}
            label={'Clasp material'}
            input={this.props.inputs.watchClaspMaterial}
            onChange={this.props.onValueChange}
          />
        </div>
        <div className={classes.row2}>
          <NumberInput 
            label={'Lug width (mm)'}
            input={this.props.inputs.watchLugWidth}
            onChange={this.props.onValueChange}
          />
          <NumberInput
            label={'Buckle width (mm)'}
            input={this.props.inputs.watchBuckleWidth}
            onChange={this.props.onValueChange}
          />
        </div>
        <div className={classes.row3}>
          <NumberInput 
            label={'Bracelet length, long side (mm)'}
            input={this.props.inputs.watchBraceletLengthLong}
            onChange={this.props.onValueChange}
          />
          <NumberInput 
            label={'Bracelet length, short side (mm)'}
            input={this.props.inputs.watchBraceletLengthShort}
            onChange={this.props.onValueChange}
          />
          <NumberInput 
            label={'Bracelet thickness (mm)'}
            input={this.props.inputs.watchBraceletThickness}
            onChange={this.props.onValueChange}         
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    watchBraceletColor: state.watchForm.watchBraceletColor,
    watchClasp: state.watchForm.watchClasp,
    watchClaspMaterial: state.watchForm.watchClaspMaterial,
    watchLugWidth: state.watchForm.watchLugWidth,
    watchBuckleWidth: state.watchForm.watchBuckleWidth,
    watchBraceletLengthLong: state.watchForm.watchBraceletLengthLong,
    watchBraceletLengthShort: state.watchForm.watchBraceletLengthShort,
    watchBraceletThickness: state.watchForm.watchBraceletThickness,
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BraceletDetails);