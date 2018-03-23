import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './JewelryDetails.css';
import * as actions from '../../../store/actions/index';
import { 
  jewelryPreciousMetal, 
  jewelryLinkTypes,
  jewelryKRT,
  jewelryGender,
  jewelryGemstones,
  jewelryColor,
  jewelryClarity,
  jewelryCut,
} from '../../../_secret/jewelryFormData';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import VariableInput from '../../UI/Inputs/VariableInput/VariableInput';
import TextInput from '../../UI/Inputs/TextInput/TextInput';
import DropdownInput from '../../UI/Inputs/DropdownInput/DropdownInput';

class JewelryDetails extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Offer Details (optional)</SectionHeader>
        <div className={classes.container}>
          <VariableInput 
            label={'Precious Metal'}
            options={jewelryPreciousMetal}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryPreciousMetal}
          />
          <VariableInput
            label={'Type of Links'}
            options={jewelryLinkTypes}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryLinkType}
          />
          <VariableInput
            label={'KRT'}
            options={jewelryKRT}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryKRT}
          />
          <TextInput 
            label={'Carat'}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryCarat}
          />
          <VariableInput 
            label={'Gender'}
            options={jewelryGender}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryGender}
          />
          <VariableInput 
            label={'Cut'}
            options={jewelryCut}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryCut}
          />
          <VariableInput
            label={'Clarity'}
            options={jewelryClarity}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryClarity}
          />
          <VariableInput
            label={'Color'}
            options={jewelryColor}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryColor}
          />
          <VariableInput 
            label={'Gemstones'}
            options={jewelryGemstones}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryGemstones}
          />
        </div>
      </section>
    )
  }
};

const mapStateToProps = (state) => ({
  inputs: {
    jewelryPreciousMetal: state.jewelryForm.jewelryPreciousMetal,
    jewelryLinkType: state.jewelryForm.jewelryLinkType,
    jewelryKRT: state.jewelryForm.jewelryKRT,
    jewelryGender: state.jewelryForm.jewelryGender,
    jewelryCarat: state.jewelryForm.jewelryCarat,
    jewelryCut: state.jewelryForm.jewelryCut,
    jewelryClarity: state.jewelryForm.jewelryClarity,
    jewelryColor: state.jewelryForm.jewelryColor,
    jewelryGemstones: state.jewelryForm.jewelryGemstones,
    jewelryCondition: state.jewelryForm.jewelryCondition
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryDetails);