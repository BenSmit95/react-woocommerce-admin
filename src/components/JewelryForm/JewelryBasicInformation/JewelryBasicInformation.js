import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { jewelryTypes, jewelryBrands, jewelryCondition } from '../../../_secret/jewelryFormData';
import classes from './JewelryBasicInformation.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import TextInput from '../../UI/Inputs/TextInput/TextInput';
import VariableInput from '../../UI/Inputs/VariableInput/VariableInput';
import DropdownInput from '../../UI/Inputs/DropdownInput/DropdownInput';

class JewelryBasicInformation extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Basic Information</SectionHeader>

        <TextInput
          label={'Offer name'}
          input={this.props.inputs.jewelryName}
          onChange={this.props.onValueChange}
        />
        <div className={classes.container}>
          {/* <VariableInput
            label={'Type'}
            input={this.props.inputs.jewelryType}
            options={jewelryTypes}
            onChange={this.props.onValueChange}
          /> */}

          <VariableInput
            label={'Brand'}
            options={jewelryBrands}
            input={this.props.inputs.jewelryBrand}
            onChange={this.props.onValueChange}
          />
          <DropdownInput
            label={'Condition'}
            options={jewelryCondition}
            onChange={this.props.onValueChange}
            input={this.props.inputs.jewelryCondition}
          />
        </div>
      </section>
    )
  }
};

const mapStateToProps = (state) => ({
  inputs: {
    jewelryType: state.jewelryForm.jewelryType,
    jewelryName: state.jewelryForm.jewelryName,
    jewelryBrand: state.jewelryForm.jewelryBrand,
    jewelryCondition: state.jewelryForm.jewelryCondition
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JewelryBasicInformation);