import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './JewelryMeasurements.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import NumberInput from '../../UI/Inputs/NumberInput/NumberInput';

class JewelryMeasurements extends Component {
  render() {
    return (
      <section className={classes.JewelryMeasurements}>
        <SectionHeader>Offer Measurements</SectionHeader>
        <div className={classes.container}>
          <NumberInput 
            label={'Length (cm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryLength}
          />
          <NumberInput
            label={'Width (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryWidth}
          />
          <NumberInput
            label={'Height (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryHeight}
          />
          <NumberInput
            label={'Thickness (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryThickness}
          />
          <NumberInput
            label={'Size (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelrySize}
          />
          <NumberInput
            label={'Diameter (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryDiameter}
          />
          <NumberInput
            label={'Ring Size (mm)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryRingSize}
          />
          <NumberInput
            label={'Weight (g)'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryWeight}
          />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    jewelryLength: state.jewelryForm.jewelryLength,
    jewelryWidth: state.jewelryForm.jewelryWidth,
    jewelryHeight: state.jewelryForm.jewelryHeight,
    jewelryThickness: state.jewelryForm.jewelryThickness,
    jewelrySize: state.jewelryForm.jewelrySize,
    jewelryDiameter: state.jewelryForm.jewelryDiameter,
    jewelryRingSize: state.jewelryForm.jewelryRingSize,
    jewelryWeight: state.jewelryForm.jewelryWeight
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryMeasurements);