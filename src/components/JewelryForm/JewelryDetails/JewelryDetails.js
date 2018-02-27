import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './JewelryDetails.css';
import * as actions from '../../../store/actions/index';
import { 
  jewelryPreciousMetal, 
  jewelryLinkChain,
  jewelryContent,
  jewelryGender,
  jewelryGemstones,
  jewelryColor,
  jewelryClarity,
  jewelryCut
} from '../../../_secret/jewelryFormData';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import VariableInput from '../../UI/Inputs/VariableInput/VariableInput';
import TextInput from '../../UI/Inputs/TextInput/TextInput';

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
            label={'Link Chain'}
            options={jewelryLinkChain}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryLinkChain}
          />
          <VariableInput
            label={'Content'}
            options={jewelryContent}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryContent}
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
    jewelryLinkChain: state.jewelryForm.jewelryLinkChain,
    jewelryContent: state.jewelryForm.jewelryContent,
    jewelryGender: state.jewelryForm.jewelryGender,
    jewelryCarat: state.jewelryForm.jewelryCarat,
    jewelryCut: state.jewelryForm.jewelryCut,
    jewelryClarity: state.jewelryForm.jewelryClarity,
    jewelryColor: state.jewelryForm.jewelryColor,
    jewelryGemstones: state.jewelryForm.jewelryGemstones
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryDetails);